import { Juguete } from './../../modelos/juguete';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioJuguetesService } from 'src/servicios/servicio-juguetes.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-juguetes',
  templateUrl: './lista-juguetes.component.html',
  styleUrls: ['./lista-juguetes.component.css']
})
export class ListaJuguetesComponent implements OnInit, OnDestroy {

  listaJuguetes: Juguete [];
  suscripcionJuguetes: Subscription;

  constructor(
    private readonly router: Router,
    private readonly servicioJuguetes: ServicioJuguetesService,
    private readonly servicioAlertas: ToastrService
    ) { }

  ngOnInit(): void {
    this.obtenerJuguetes();
  }

  obtenerJuguetes(): void {
    this.suscripcionJuguetes = this.servicioJuguetes.obtenerListaJuguetes().subscribe(res => {
      this.listaJuguetes = res;
    })
  }

  agregarNuevo(): void {
    this.router.navigate(['/agregar']);
  }

  actualizar(id: number): void {
    this.router.navigate(['/actualizar/' + id])
  }

  borrar(id: number): void {
    this.suscripcionJuguetes = this.servicioJuguetes.borrarJuguete(id).subscribe(() => {
      this.servicioAlertas.info('Juguete elminado correctamente');
      this.obtenerJuguetes();
    },
    error => {
      this.servicioAlertas.error('No se pudo eliminar juguete');
    });
  }

  ngOnDestroy(): void {
    if(this.suscripcionJuguetes){
      this.suscripcionJuguetes.unsubscribe();
    }
  }
}
