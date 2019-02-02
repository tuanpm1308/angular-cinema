import { ShowtimeTime } from './showtime-time';

export interface ShowtimeMovie {
  id: number;
  showtimes: ShowtimeTime[] | string[];
}
