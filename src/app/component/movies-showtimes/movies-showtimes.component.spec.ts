import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesShowtimesComponent } from './movies-showtimes.component';

describe('ShowtimesComponent', () => {
  let component: MoviesShowtimesComponent;
  let fixture: ComponentFixture<MoviesShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
