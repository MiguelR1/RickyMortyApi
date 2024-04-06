import { Character, Result } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { enviroments } from '../enviroments/enviroments';
import { Location, ResultLocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class RmService {

  characterUrl:string = enviroments.baseUrl+`character/`;

  locationUrl:string = enviroments.baseUrl+`location/`;

  url:string = enviroments.baseUrl;

  public existPersonaje:boolean = true;

  private _Character: Result[] = [];

  private _pageNumber:number = 1;

  get Character(){
    return this._Character;
  }

  get pageNumber(){
    return this._pageNumber
  }

  set pageNumber(value){
    this._pageNumber = value;
  }

  set Character(value){
    this._Character = value;
  }

  public getCharacters(page:number):Observable<Character>{
    return this.http.get<Character>(this.url+`character?page=`+page)
  }

  public searchCharacter(name:string):any{
    return this.http.get(this.characterUrl+`?name=`+name)
  }

  public getaCharacter(id:number):Observable<Result>{
    return this.http.get<Result>(this.characterUrl + id)
  }

  public getResident(url:string):Observable<any>{
    return this.http.get<any>(url)
  }

  public getAliveDead(status:string):Observable<Character>{
    return this.http.get<Character>(this.characterUrl + `?status=`+status)
  }

  public getGender(gender:string):Observable<Character>{
    return this.http.get<Character>(this.characterUrl + `?gender=`+gender)
  }

  public getCharacterwithGS():Observable<Character>{
    return this.http.get<Character>(this.characterUrl+`?gender=`+this.gender+`&status=`+this.status)
  }

  public getLocations(page:number):Observable<Location>{
    return this.http.get<Location>(this.locationUrl+`?page=`+page)
  }

  public getSLocation(id:number):Observable<ResultLocation>{
    return this.http.get<ResultLocation>(this.locationUrl+id)
  }

  public goLoc(ubi:string):Observable<Location>{
    return this.http.get<Location>(this.locationUrl+`?name=`+ubi)
  }

  public status:string = '';
  public gender:string = '';

  constructor( private http:HttpClient ) { }
}
