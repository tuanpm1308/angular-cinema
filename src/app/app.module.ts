import { AngularFireDatabase } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { JoinPipe } from './pipe/join.pipe';
import { MinutePipe } from './pipe/minute.pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    FrontpageComponent,
    JoinPipe,
    MinutePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
