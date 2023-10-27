import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from "@angular/common";

import { PersonajesService } from 'src/app/personajes.service';
import { Personajes } from 'src/app/interfaces/personajes.interface';
import { switchMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styles: [
  ]
})
export class InfoCardComponent implements OnInit{

 public personaje?: Personajes;

 ngOnInit(): void {

  this.activatedRoute.params
      .pipe( switchMap( params => this.Spersonaje.getDetails(params['id']) ) )
      .pipe(
        catchError( error => {
          this.route.navigateByUrl('');
          return of(undefined);
        })
      )
      .subscribe( personajes => this.personaje = personajes )
 }
 constructor( private Spersonaje:PersonajesService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private location:Location ){}

}
