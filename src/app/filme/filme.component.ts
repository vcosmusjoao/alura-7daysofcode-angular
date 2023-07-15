import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from '../service/film-service.service';
import { Result } from '../model/result';
import { Films } from '../model/film';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  constructor(private service: FilmServiceService){}
  movieList: Result[] = [];

  ngOnInit(): void {
    this.getMoviesFromService();
    this.transformDateToYear();
  }

  getMoviesFromService() {
    this.service.getFilms().subscribe((data) => {
      this.movieList = data;
    });

  }

  transformDateToYear(): void {
    this.movieList.forEach((movie:Result) => {
      var release = movie.release_date.toISOString()
      release = new Date(movie.release_date).getFullYear().toString();
    });
  }

}
