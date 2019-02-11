import { Movie } from './../../interface/movie';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  showAllTimes = false;
  modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.db.getMovie(id).subscribe(movie => this.movie = movie);
  }

  // show all showtimes
  showAllShowtimes(): void {
    this.showAllTimes = true;
  }

  // hide all showtimes
  hideAllShowtimes(): void {
    this.showAllTimes = false;
  }

  getBackdropUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.backdrop);
  }

  openModal(template: TemplateRef<any>, previewUrl: string) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(this.movie.trailer));
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
