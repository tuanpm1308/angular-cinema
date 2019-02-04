import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from './../../interface/movie';
import { Showtime } from './../../interface/showtime';
import { DatabaseService } from './../../service/database.service';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass']
})
export class ShowtimesComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  @Input() todayOnly = true;
  showtimes: Showtime[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.getShowtimes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['todayOnly']) {
      this.getShowtimes();
    }
  }

  getShowtimes(): void {
    this.db.getMovieShowtimes(this.movie, this.todayOnly).subscribe(showtimes => this.showtimes = showtimes);
  }
}
