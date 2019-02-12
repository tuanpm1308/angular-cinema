import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGridComponent } from './movies-grid.component';

describe('MoviesGridComponent', () => {
  let component: MoviesGridComponent;
  let fixture: ComponentFixture<MoviesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
