import { DatabaseService } from './../../service/database.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.db.getMovies().subscribe(movies => this.movies = movies);
  }

}
