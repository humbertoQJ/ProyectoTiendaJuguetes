import { ServicioJuguetesService } from 'src/servicios/servicio-juguetes.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juguete } from 'src/modelos/juguete';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-actualizar',
  templateUrl: './formulario-actualizar.component.html',
  styleUrls: ['./formulario-actualizar.component.css']
})
export class FormularioActualizarComponent implements OnInit, OnDestroy {

  suscripcionRuta: Subscription;
  suscripcionJuguetes: Subscription;

  formularioActualizar: FormGroup;
  urlId: number;
  jugueteActualizado: Juguete;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly servicioJuguetes: ServicioJuguetesService,
    private readonly servicioAlertas: ToastrService
    ) { }

  ngOnInit(): void {
    this.suscripcionRuta = this.route.params.subscribe(params => {
      this.urlId = params['id'];
    });

    this.suscripcionJuguetes = this.servicioJuguetes.obtenerJuguetePorId(this.urlId).subscribe(res => {
      this.formularioActualizar = this.formBuilder.group({
        id: [res.id],
        nombre: [res.nombre, [Validators.required, Validators.maxLength(50)]],
        precio: [
          res.precio,
          [Validators.required, Validators.min(1), Validators.max(1000)],
        ],
        compania: [res.compania, [Validators.required, Validators.maxLength(50)]],
        restriccionEdad: [res.restriccionEdad, [Validators.min(0), Validators.max(100)]],
        descripcion: [res.descripcion, [Validators.maxLength(100)]],
      });
    });
  }

  onSubmit(): void {
    this.jugueteActualizado = this.formularioActualizar.value;
    this.suscripcionJuguetes = this.servicioJuguetes.actualizarJuguete(this.jugueteActualizado).subscribe(res => {
      console.log(res);
      this.servicioAlertas.success('Datos de juguete actualizados');
      this.regresar();
    }, error => {
      this.servicioAlertas.error('No se pudo actualizar');
    });
  }

  mostrarErrorCampo(nombreControl: string): string {
    let control = this.formularioActualizar.get(nombreControl);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (control?.hasError('maxLength')) {
      return 'Longitud maxima superada';
    }

    if (control?.hasError('min')) {
      return 'Cantidad minima no alcanzada';
    }

    if (control?.hasError('max')) {
      return 'Cantidad maxima superada';
    }

    return '';
  }

  regresar(): void {
    this.router.navigate(['/juguetes']);
  }

  ngOnDestroy(): void {
    if(this.suscripcionRuta){
      this.suscripcionRuta.unsubscribe();
    }
    if(this.suscripcionJuguetes){
      this.suscripcionJuguetes.unsubscribe();
    }
  }
}
