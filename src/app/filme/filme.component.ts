import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  constructor(private http: HttpClient){}
  movieList: any;

  ngOnInit(): void {
    this.http.get<any>('assets/films.json').subscribe((data) => {
      this.movieList = data.results;
      this.transformDateToYear();
    });
  }

  onTeste(){
    console.log(this.movieList);
  }

  transformDateToYear(): void {
    this.movieList.forEach((movie:any) => {
      movie.release_date = new Date(movie.release_date).getFullYear().toString();
    });
  }

}
