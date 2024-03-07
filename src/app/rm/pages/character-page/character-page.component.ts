import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/character.interface';
import { RmService } from '../../rm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styles: [
  ]
})
export class CharacterPageComponent implements OnInit {

  public character?:Result;

  ngOnInit(): void {
    this.ar.params
    .pipe(
      switchMap(
        params =>
        this.rmS.getaCharacter(params['id'])
      ),
      catchError( error => {
        this.route.navigateByUrl('');
        return of (undefined);
      })
    )
    .subscribe( data => this.character = data)

  }

constructor( private rmS:RmService,
              private ar:ActivatedRoute,
              private route:Router){}

  back(){
    this.route.navigateByUrl('');
  }
}
