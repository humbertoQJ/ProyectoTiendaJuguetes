import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.css']
})
export class FormularioAgregarComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router)
    { }

  formularioAgregar: FormGroup;

  ngOnInit(): void {
    this.formularioAgregar = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(4)]],
      precio: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      compania: ['', [Validators.required, Validators.maxLength(50)]],
      restriccionEdad: ['' , [Validators.min(0), Validators.max(100)]],
      descripcion: ['' , [Validators.maxLength(100)]]
    });
  }

  mostrarErrorCampo(nombreControl: string): string {
    let control = this.formularioAgregar.get(nombreControl);
    if(control?.hasError('required')) {
      return 'Este campo es requerido'
    }

    if(control?.hasError('maxLength')){
      return 'Longitud maxima superada'
    }

    if(control?.hasError('min')){
      return 'Cantidad minima no alcanzada'
    }

    if(control?.hasError('max')){
      return 'Cantidad maxima superada'
    }

    return '';
  }

  onSubmit(): void {
    console.log(this.formularioAgregar.value);
  }

  regresar(): void {
    this.router.navigate(['/juguetes'])
  }

}
