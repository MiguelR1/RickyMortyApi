import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RmService } from '../../rm.service';
import { catchError, of, switchMap } from 'rxjs';
import { ResultLocation } from 'src/app/interfaces/location.interface';
import { Result } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styles: ``
})
export class LocationPageComponent implements OnInit{

  location?: ResultLocation;

  residents: string[] | undefined;

  resident: Result[] = [];

  ngOnInit(): void {

    this.ar.params
      .pipe(
        switchMap (
          data =>
          this.rms.getSLocation(data['id'])
          ),
        catchError( () =>  {
          this.route.navigateByUrl('');
          return of (undefined);
        })
        )
      .subscribe(data =>{
        this.location = data
        data?.residents.forEach( residentURl =>{
          this.getResident(residentURl)
        })
      }
      )
  }

  getResident(url:string){
    this.rms.getResident(url)

      .subscribe(data =>{
        this.resident.push(data)
      }

      )

  }

  constructor( public ar:ActivatedRoute,
               public rms:RmService,
               public route:Router ){}
}
