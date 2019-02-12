import { ShowtimeDate } from './../interface/showtime-date';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';
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
  getMovies(limit?: number, exclude?: number | number[]): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      map(movies => {
        let excludes: number[] = [];

        if (exclude) {
          if (typeof exclude === 'number') {
            excludes = [exclude];
          } else {
            excludes = exclude;
          }

          movies = movies.filter(movie => excludes.indexOf(movie.id) === -1);
        }

        return limit ? movies.slice(0, limit) : movies;
      }),
      catchError(this.handleError<Movie[]>(`getMovies`, []))
    );
  }

  // Get now playing moving
  getNowPlayingMovies(filterDate: string = 'all'): Observable<Movie[]> {
    let today = null;
    let next6days = null;

    if (filterDate === 'all') {
      today = new Date();
      next6days = new Date();
      today.setHours(0, 0, 0, 0);
      next6days.setHours(0, 0, 0, 0);
      next6days.setDate(next6days.getDate() + 6);
    } else {
      today = new Date(filterDate);
    }

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime =>
          showtime.showtimes.filter(showtimesDate => {
            const showtimeDate = new Date(showtimesDate.date);

            return filterDate === 'all' ? showtimeDate >= today && showtimeDate <= next6days : showtimeDate.getDate() === today.getDate();
          }).length > 0
        )),
        concatMap(showtimes => this.http.get<Movie[]>(this.moviesUrl)
          .pipe(
            map(movies => movies.filter(movie => showtimes.filter(showtime => movie.id === showtime.movieId).length > 0))
          )),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // Get movie showtimes
  getMovieShowtimes(movie: Movie | number, filterDate: string, showAllTimes: boolean = false): Observable<ShowtimeDate[]> {
    let movieId = null;

    if (typeof movie === 'object') {
      movieId = movie.id;
    } if (typeof movie === 'number') {
      movieId = movie;
    }

    //
    const date = showAllTimes || filterDate === 'all' ? new Date() : new Date(filterDate);
    const next6days = new Date();
    date.setHours(0, 0, 0, 0);
    next6days.setHours(0, 0, 0, 0);
    next6days.setDate(next6days.getDate() + 6);

    return this.http.get<Showtime[]>(this.showtimesUrl)
      .pipe(
        map(showtimes => showtimes.filter(showtime => {
          let flag = 0;

          showtime.showtimes = showtime.showtimes.filter(showtimesDate => {
            const showtimeDate = new Date(showtimesDate.date);
            return showAllTimes || filterDate === 'all' && !flag++ ? showtimeDate >= date && showtimeDate <= next6days : showtimeDate.getTime() === date.getTime();
          });

          return showtime.movieId === movieId;
        })),
        map(showtimes => showtimes.length ? showtimes[0].showtimes : []),
        catchError(this.handleError('getNowPlayingMovies', []))
      );
  }

  // get single movie
  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      catchError(this.handleError<Movie>(`getMovie id = {id}`))
    );
  }

  // search movies
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Movie[]>(`searchMovies`, []))
    );
  }
}
