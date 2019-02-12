import { Movie } from './../../interface/movie';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass']
})
export class MoviesGridComponent implements OnInit {
  @Input() limit: number;
  @Input() columns: number;
  @Input() exclude?: number | number[];
  movies: Movie[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.db.getMovies(this.limit, this.exclude).subscribe(movies => this.movies = movies);;
  }
}
