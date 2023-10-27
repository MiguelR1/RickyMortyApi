import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from 'rxjs';
import { Personajes } from './interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  url: string = 'https://rickandmortyapi.com/api/character';

  constructor( private http:HttpClient ) { }

  public getPersonaje(page:number): Observable<Personajes[]>{
    const url = `${this.url}?page=${page}`;
    return this.http.get<Personajes[]>(url);
  }

  public getbyName(name:string): Observable<Personajes[]>{
    const url = `${this.url}?name=${name}`;
    return this.http.get<Personajes[]>(url)
      .pipe(
        catchError( error => {
          return of([  ])
        })
      );
  }

  public getDetails(id:number): Observable<Personajes>{
    const url = `${this.url}/${id}`;
    return this.http.get<Personajes>(url);
  }
}
