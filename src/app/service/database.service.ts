import { ShowtimeDate } from './../interface/showtime-date';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Movie } from './../interface/movie';
import { Showtime } from './../interface/showtime';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private moviesUrl = 'api/movies';
  private showtimesUrl = 'api/showtimes';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T>  => {
      console.error(error);

      return of(result as T);
    };
  }

  // Get all movies
  getMovies(): Observable<Movie[]> {
    return null;
  }

  // Get now playing moving
  getNowPlayingMovies(date: string): Observable<Movie[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        map(movies => movies.filter(movie => new Date(movie.start_date) <= today && new Date(movie.end_date) >= today)),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // Get movie showtimes
  getMovieShowtimes(movie: Movie | number, onlyToday: boolean = true): Observable<ShowtimeDate[]> {
    let movieId = null;

    if (typeof movie === 'object') {
      movieId = movie.id;
    } if (typeof movie === 'number') {
      movieId = movie;
    }

    //
    const today = new Date();
    const next6days = new Date();
    today.setHours(0, 0, 0, 0);
    next6days.setHours(0, 0, 0, 0);
    next6days.setDate(next6days.getDate() + 6);

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime => {
          showtime.showtimes = showtime.showtimes.filter(showtimesDate => {
            const date = new Date(showtimesDate.date);
            return onlyToday ? date.getTime() === today.getTime() : date >= today && date <= next6days;
          });

          return showtime.movieId === movieId;
        })),
        map(showtimes => showtimes.length ? showtimes[0].showtimes : []),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }
}
