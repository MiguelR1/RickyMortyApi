import { Character } from './../../../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { RmService } from '../../rm.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{

  page(signo:number){

    if (signo=== +1) {
      this.pageNumber++;
      this.getCharacters(this.pageNumber);

    } else{
      this.pageNumber--;
      this.getCharacters(this.pageNumber);
    }
    if(this.pageNumber<1){
      this.pageNumber = 1;
    }

    if (this.pageNumber>42) {
      this.pageNumber = 42;
    }

  }

  get existPersonaje(){
    return this.rmS.existPersonaje;
  }

  get Character(){
    return this.rmS.Character;
  }

  set Character(value){
    this.rmS.Character = value;
  }

  get pageNumber(){
    return this.rmS.pageNumber;
  }

  set pageNumber(value){
    this.rmS.pageNumber = value;
  }

  get status(){
    return this.rmS.status;
  }

  set status(status){
    this.rmS.status = status;
  }

  get gender(){
    return this.rmS.gender;
  }

  set gender(gender){
    this.rmS.gender = gender;
  }



  getCharacters(page:number) {
    this.rmS.getCharacters(page).subscribe(
      (response:Character) => {
        this.Character = response.results;
        console.log(this.Character)

      },
      (error) => {
        console.error(error);
      }
    );
  }

  getStatus(status:string){
    this.status = status;


    if (this.status.length && this.gender.length > 0) {
      this.getCharacterwithGS();
    } else{
      this.rmS.getAliveDead(status)
      .subscribe( (data) => this.Character = data.results);
    }

  }

  getGender(gender:string){
    this.gender = gender;


    if (this.status.length && this.gender.length > 0) {

      this.getCharacterwithGS();
    } else{

      this.rmS.getGender(gender)
      .subscribe( data => this.Character = data.results );
    }

  }

  getCharacterwithGS(){

    if (this.status.length && this.gender.length > 0) {
      this.rmS.getCharacterwithGS()
        .subscribe(data => this.Character = data.results
        )
    }
    return
  }

  Locid: number = 0;


  goLoc(ubi:string){
    this.rmS.goLoc(ubi)
      .subscribe( data =>
          {
            this.Locid = data.results[0].id
            console.log(this.Locid)
            this.route.navigateByUrl('/rickymorty/location/'+this.Locid)
          }
      )
  }

  ngOnInit() {
    this.getCharacters(this.pageNumber);
  }

  constructor( private rmS:RmService,
               private route:Router){}

}
