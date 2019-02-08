import { DatabaseService } from './../../service/database.service';
import { Movie } from './../../interface/movie';
import { Component, OnInit, Input, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Movie[];
  showAllTimes: boolean[] = [];
  @Input() filterDate: string;
  modalRef: BsModalRef;
  previewUrl = '';

  constructor(private db: DatabaseService, private modalService: BsModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterDate']) {
      this.getMovies();
    }
  }

  // get playing movie based on filter date
  getMovies(): void {
    this.db.getNowPlayingMovies(this.filterDate).subscribe(movies => this.movies = movies);
  }

  // show all showtimes
  showAllShowtimes(movieId: number): void {
    this.showAllTimes[movieId] = true;
  }

  // hide all showtimes
  hideAllShowtimes(movieId: number): void {
    this.showAllTimes[movieId] = false;
  }

  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.previewUrl = previewUrl;
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
