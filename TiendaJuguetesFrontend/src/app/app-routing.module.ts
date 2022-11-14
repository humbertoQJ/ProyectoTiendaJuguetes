import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { ListaJuguetesComponent } from './lista-juguetes/lista-juguetes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ListaJuguetesComponent},
  {path: 'juguetes', component: ListaJuguetesComponent},
  {path: 'agregar', component: FormularioAgregarComponent},
  {path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
