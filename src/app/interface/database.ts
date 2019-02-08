import { Showtime } from './showtime';
import { Movie } from './movie';

export interface Database {
  movies: Movie[];
  showtimes: Showtime[];
}
