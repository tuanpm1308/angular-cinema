import { ShowtimeTime } from './showtime-time';

export interface ShowtimeDate {
  date: string;
  times: (string | ShowtimeTime)[];
}
