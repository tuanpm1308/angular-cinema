import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Movie } from './../interface/movie';
import { Showtime } from './../interface/showtime';
import { ShowtimeMovie } from './../interface/showtime-movie';
import { ShowtimeDate } from './../interface/showtime-date';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  movies: Observable<Movie[]>;
  showtimes: Observable<ShowtimeMovie[]>;

  constructor(private db: AngularFireDatabase) { }

  // Get all movies
  getMovies(): Observable<Movie[]> {
    return this.db.list<Movie>('movies').valueChanges();
  }

  // Get now playing moving
  getNowPlayingMovies(): Observable<Movie[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.db.list<Movie>('movies').valueChanges().pipe(
      map(movies => movies.filter(movie => new Date(movie.start_date) <= today && new Date(movie.end_date) >= today)));
  }

  // Get movie showtimes
  getMovieShowtimes(movie: Movie | number, onlyToday: boolean = true): Observable<Showtime[]> {
    let movieId = null;

    if (typeof movie === 'object') {
      movieId = movie.id;
    } else if (typeof movie === 'number') {
      movieId = movie;
    } else {
      return null;
    }

    //
    const today = new Date();
    const next6days = new Date();
    today.setHours(0, 0, 0, 0);
    next6days.setHours(0, 0, 0, 0);
    next6days.setDate(next6days.getDate() + 6);

    return this.db.list<ShowtimeDate>('showtimes').valueChanges().pipe(
      map(showtimes => showtimes.filter(showtime => {
        const st = new Date(showtime.date);
        return showtime.movies.filter(m => m.id === movieId).length > 0 && (onlyToday ? st.getTime() === today.getTime() : st >= today && st <= next6days);
      })),
      map(showtimes => {
        const result: Showtime[] = [];

        for (const showtime of showtimes) {
          const moveShowtime: Showtime = { date: showtime.date, showtimes: showtime.movies.filter(m => m.id === movieId)[0].showtimes };
          result.push(moveShowtime);
        }

        return result;
      })
    );
  }
}
