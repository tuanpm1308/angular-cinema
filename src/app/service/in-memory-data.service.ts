import { Showtime } from './../interface/showtime';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import mockData from './mock-data.json';
import { Database } from '../interface/database';
import { ShowtimeDate } from '../interface/showtime-date';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data: Database = mockData;

    // setup demo showtimes data
    const randomDate = [
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1]
    ];

    for (const i in data.showtimes) {
      if (data.showtimes[i]) {
        const today = new Date();
        const showtime = data.showtimes[i].showtimes[0];
        data.showtimes[i].showtimes = [];

        for (let c = 0; c < 7; c++) {
          if (randomDate[i][c]) {
            const newShowtime: ShowtimeDate = {
              date: this.dateToString(today),
              times: showtime.times
            };

            data.showtimes[i].showtimes.push(newShowtime);
          }

          today.setDate(today.getDate() + 1);
        }
      }
    }

    return data;
  }

  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}
