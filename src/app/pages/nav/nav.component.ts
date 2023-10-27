import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/personajes.interface';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{


  ngOnInit(): void {}

  constructor( private Spersonaje:PersonajesService ){};

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value:string ){
    this.onValue.emit(value);
  }

}
