import { Juguete } from './../../modelos/juguete';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-juguetes',
  templateUrl: './lista-juguetes.component.html',
  styleUrls: ['./lista-juguetes.component.css']
})
export class ListaJuguetesComponent implements OnInit {

  listaJuguetes: Juguete [] = [
    {id: 1,nombre:'max steel', compania: 'Mattel', precio: 51, restriccionEdad: 18},
    {id: 2,nombre:'barbie', compania: 'Lego', precio: 41, restriccionEdad: 19},
    {id: 3,nombre:'otra barbie', compania: 'Fisher', precio: 230, restriccionEdad: 10},
    {id: 4,nombre:'gafidono', compania: 'Nerf', precio: 89, restriccionEdad: 9},
    {id: 5,nombre:'max', compania: 'Hasbro', precio: 35, restriccionEdad: 45},
    {id: 6,nombre:'maxor', compania: 'Bandai', precio: 98, restriccionEdad: 9},
  ]

  constructor(private readonly router: Router) { }

  ngOnInit(): void {

  }

  agregarNuevo(): void {
    this.router.navigate(['/agregar']);
  }

}
