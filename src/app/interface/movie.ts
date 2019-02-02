export interface Movie {
  id: number;
  imdbId: string;
  imdbRating: string;
  title: string;
  poster: string;
  trailer: string;
  overview: string;
  director: string;
  cast: string | string[];
  release_date: string;
  start_date: string;
  end_date: string;
  runtime: number;
  mpaa: string;
}
