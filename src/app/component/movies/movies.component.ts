import { FilterDate } from './../../interface/filter-date';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  filters: FilterDate[];
  selectedDate: string;

  constructor() { }

  ngOnInit() {
    this.getFilters();
  }

  // get filters value, text to display
  getFilters() {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    this.filters = [];
    this.selectedDate = this.dateToString(date);

    for (let i = 0; i < 7; i++) {
      this.filters.push({ date: this.dateToString(date), day:  i === 0 ? 'Today' : weekday[date.getDay()] });
      date.setDate(date.getDate() + 1);
    }

    this.filters.push({ date: 'all', day: 'All Times' });
  }

  // change filter
  changeFilter(date: string) {
    this.selectedDate = date;
  }

  // date to string mm/dd/yyyy
  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}
