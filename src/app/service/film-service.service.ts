import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../model/result';
import { Observable, map } from 'rxjs';
import { Films } from '../model/film';
import { ApiReturn } from '../model/apireturn';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  path = "https://swapi.dev/api";
  constructor(private http: HttpClient){}

  getFilms(search?:string){
    let path = `${this.path}/films/`;
    if(search){
      path +=`?search=${search}`
    }
    return  this.http.get<ApiReturn<Result>>(path).pipe(
      map(response => response.results)
    );
  }

  
  
}
