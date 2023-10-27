import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';
import { Personajes } from 'src/app/interfaces/personajes.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit{

  public personajeInfo: Personajes[] = [];

  public currentPage:number = 1;

  public totalPages: number = 1;

  public nombrePer: string = "";


  constructor( private Spersonaje:PersonajesService){}

  ngOnInit(): void {
    this.cargaPersonajes();
    this.cargaPorNombre(this.nombrePer);
  }

  public cargaPersonajes():void {
    this.Spersonaje.getPersonaje(this.currentPage)
    .subscribe( (data:any) => {
      this.personajeInfo = data.results;
      this.totalPages = data.info.pages;
    });
  }

  public cargaPorNombre(nombrePer:string):void {
    this.Spersonaje.getbyName(nombrePer)
    .subscribe( (data:any) => {
        this.personajeInfo = data.results;
    })
    ;
  }


  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.cargaPersonajes();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.cargaPersonajes();
    }
  }

}
