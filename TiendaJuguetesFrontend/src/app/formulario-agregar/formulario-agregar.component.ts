import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioJuguetesService } from 'src/servicios/servicio-juguetes.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.css'],
})
export class FormularioAgregarComponent implements OnInit, OnDestroy {

  suscripcionJuguetes: Subscription;
  formularioAgregar: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly servicioJuguetes: ServicioJuguetesService,
    private servicioAlertas: ToastrService
  ) {}

  ngOnInit(): void {
    this.formularioAgregar = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      precio: [
        '',
        [Validators.required, Validators.min(1), Validators.max(1000)],
      ],
      compania: ['', [Validators.required, Validators.maxLength(50)]],
      restriccionEdad: ['', [Validators.min(0), Validators.max(100)]],
      descripcion: ['', [Validators.maxLength(100)]],
    });
  }

  onSubmit(): void {
    this.suscripcionJuguetes = this.servicioJuguetes.agregarJuguete(this.formularioAgregar.value).subscribe(() => {
      this.servicioAlertas.success('Juguete guardado correctamente');
      this.regresar();
    }, error => {
      this.servicioAlertas.error('No se pudo guardar juguete');
    });
  }

  mostrarErrorCampo(nombreControl: string): string {
    let control = this.formularioAgregar.get(nombreControl);
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
    if(this.suscripcionJuguetes){
      this.suscripcionJuguetes.unsubscribe();
    }
  }
}
