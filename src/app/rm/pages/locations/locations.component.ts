import { Component, OnInit } from '@angular/core';
import { RmService } from '../../rm.service';
import { Location, ResultLocation } from './../../../interfaces/location.interface';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styles: ``
})
export class LocationsComponent implements OnInit {

  locations: ResultLocation[] = [];

  locPNumber: number = 1;

  lastPNumber: number = 0;

  ngOnInit(): void {
    this.getLocation(this.locPNumber)
  }

  getLocation(page:number){
    return this.rmS.getLocations(page)
     .subscribe(
        (data:Location) => {
          this.locations = data.results;
          this.lastPNumber = data.info.pages;
        }
      )
  }

  changePage(simbolo:number){

    if(simbolo === +1){
      this.locPNumber++;
      this.getLocation(this.locPNumber)
    }else{
      this.locPNumber--;
      this.getLocation(this.locPNumber)
    }

    if (this.locPNumber < 1) {
      this.locPNumber = 1;
    }
    if (this.locPNumber > this.lastPNumber) {
      this.locPNumber = this.lastPNumber;
    }
  }

  constructor( public rmS:RmService ){}
}
