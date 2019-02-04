import { DatabaseService } from './../../service/database.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  showAll: boolean[] = [];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.db.getNowPlayingMovies().subscribe(movies => this.movies = movies);
  }

  showAllShowtimes(movieId) {
    this.showAll[movieId] = true;
  }
}
