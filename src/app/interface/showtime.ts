import { ShowtimeTime } from './showtime-time';

export interface Showtime {
  date: string;
  showtimes: ShowtimeTime[] | string[];
}
