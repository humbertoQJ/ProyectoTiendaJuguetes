import { ServicioJuguetesService } from 'src/servicios/servicio-juguetes.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juguete } from 'src/modelos/juguete';

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
  jugueteRecibido: Juguete;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly servicioJuguetes: ServicioJuguetesService
    ) { }

  ngOnInit(): void {
    this.suscripcionRuta = this.route.params.subscribe(params => {
      this.urlId = params['id'];
    });

    this.suscripcionJuguetes = this.servicioJuguetes.obtenerJuguetePorId(this.urlId).subscribe(res => {
      this.jugueteRecibido = res;
    });
  }

  onSubmit(): void {

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
