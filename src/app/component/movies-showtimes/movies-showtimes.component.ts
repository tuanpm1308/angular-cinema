import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../../interface/movie';
import { DatabaseService } from '../../service/database.service';
import { ShowtimeDate } from 'src/app/interface/showtime-date';

@Component({
  selector: 'app-movies-showtimes',
  templateUrl: './movies-showtimes.component.html',
  styleUrls: ['./movies-showtimes.component.sass']
})
export class MoviesShowtimesComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  @Input() todayOnly = true;
  showtimes: ShowtimeDate[];

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
