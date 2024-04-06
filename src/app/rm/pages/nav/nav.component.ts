import { Character, Result } from './../../../interfaces/character.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RmService } from '../../rm.service';
import { Subject, catchError, debounceTime, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit{

  public claseAgregada:boolean = false;

  expandAct(){
    if (this.claseAgregada == false) {
      this.claseAgregada = true;
    }else{
      this.claseAgregada = false;
    }
  }

  private debouncer = new Subject<string>;

  keyPress(word:string){
    this.debouncer.next(word);
  }

  page(){
    if (this.Router.url === '/rickymorty/characters') {
      location.reload();
    }
    return
  }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(800)
    )
    .subscribe(value => this.searchCharacter(value)
    )
  }

  searchCharacter(value: string) {
    this.rm.searchCharacter(value)
      .pipe(
        catchError((error: any) => {
          this.rm.existPersonaje = false;
          this.rm.Character = [];
          return of(); // Devolver un observable vacío
        })
      )
      .subscribe((character: Character) => {
        this.rm.Character = character.results;
        this.rm.existPersonaje = true;
      });
  }

  constructor( private rm:RmService,
               private Router:Router ){}


}
