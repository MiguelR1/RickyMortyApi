import { Character, Result } from './../../../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { RmService } from '../../rm.service';
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

  getCharacters(page:number) {
    this.rmS.getCharacters(page).subscribe(
      (response:Character) => {
        this.Character = response.results;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getStatus(status:string){
    this.rmS.getAliveDead(status)
      .subscribe( (data) => this.Character = data.results
      )

      if(status == 'alive'){
        this.statusAlive == true;
        this.statusDead == false;

      }
      if(status == 'dead'){
        this.statusDead == true;
        this.statusAlive == false;
      }
  }

  public statusDead: boolean = false;
  public statusAlive: boolean = false;

  ngOnInit() {
    this.getCharacters(this.pageNumber);
  }

  constructor( private rmS:RmService ){}

}
