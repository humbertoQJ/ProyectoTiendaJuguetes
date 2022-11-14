import { environment } from './../environments/environment';
import { Juguete } from './../modelos/juguete';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioJuguetesService {

  private apiURL = environment.API_URL;

  constructor(private readonly httpClient: HttpClient) { }

  obtenerListaJuguetes(): Observable<Juguete[]>{
    return this.httpClient.get<Juguete[]>(this.apiURL + 'Juguetes');
  };

  obtenerJuguetePorId(id: number): Observable<Juguete>{
    return this.httpClient.get<Juguete>(this.apiURL + 'Juguetes/' + id);
  };

  actualizarJuguete(juguete: Juguete): Observable<Juguete>{
    return this.httpClient.put<Juguete>(this.apiURL + 'Juguetes', juguete);
  }

  agregarJuguete(juguete: Juguete): Observable<Juguete>{
    return this.httpClient.post<Juguete>(this.apiURL + 'Juguetes', juguete);
  }

  // borrarJuguete(id: number): Observable<Juguete>{
  //   return this.httpClient.delete<Juguete>(this.apiURL + 'Juguetes/', id);
  // }

}
