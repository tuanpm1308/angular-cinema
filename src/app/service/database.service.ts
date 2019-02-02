import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';
import { ShowtimeMovie } from '../interface/showtime-movie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  movies: Observable<Movie[]>;
  showtimes: Observable<ShowtimeMovie[]>;

  constructor(private db: AngularFireDatabase) { }

  getMovies(): Observable<Movie[]> {
    return this.db.list<Movie>('movies').valueChanges();
  }
}
