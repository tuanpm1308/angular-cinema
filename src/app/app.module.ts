import { InMemoryDataService } from './service/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { JoinPipe } from './pipe/join.pipe';
import { MinutePipe } from './pipe/minute.pipe';
import { ShowtimesComponent } from './component/showtimes/showtimes.component';
import { DayPipe } from './pipe/day.pipe';
import { DatabaseService } from './service/database.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SafePipe } from './pipe/safe.pipe';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MoviesGridComponent } from './component/movies-grid/movies-grid.component';
import { MoviesSliderComponent } from './component/movies-slider/movies-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    FrontpageComponent,
    ShowtimesComponent,
    JoinPipe,
    MinutePipe,
    DayPipe,
    MoviesListComponent,
    SafePipe,
    MovieSearchComponent,
    MoviesGridComponent,
    MoviesSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CarouselModule.forRoot()
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
