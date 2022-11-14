import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJuguetesComponent } from './lista-juguetes/lista-juguetes.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioActualizarComponent } from './formulario-actualizar/formulario-actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaJuguetesComponent,
    BarraNavegacionComponent,
    FormularioAgregarComponent,
    PaginaNoEncontradaComponent,
    FormularioActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
