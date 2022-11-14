import { Juguete } from './../../modelos/juguete';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioJuguetesService } from 'src/servicios/servicio-juguetes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-juguetes',
  templateUrl: './lista-juguetes.component.html',
  styleUrls: ['./lista-juguetes.component.css']
})
export class ListaJuguetesComponent implements OnInit, OnDestroy {

  listaJuguetes: Juguete [];
  suscripcionJuguetes: Subscription;

  constructor(private readonly router: Router, private readonly servicioJuguetes: ServicioJuguetesService) { }

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    if(this.suscripcionJuguetes){
      this.suscripcionJuguetes.unsubscribe();
    }
  }
}
