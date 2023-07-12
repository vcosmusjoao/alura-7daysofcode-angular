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
    });
  }

  onTeste(){
    console.log(this.movieList);
  }


}
