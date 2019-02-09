export interface Movie {
  id: number;
  imdbId: string;
  imdbRating: number;
  title: string;
  poster: string;
  backdrop: string;
  trailer: string;
  overview: string;
  director: string;
  cast: string[];
  release_date: string;
  start_date: string;
  end_date: string;
  runtime: number;
  mpaa: string;
}
