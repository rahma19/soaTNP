import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGamesComponent } from './liste-games.component';

describe('ListeGamesComponent', () => {
  let component: ListeGamesComponent;
  let fixture: ComponentFixture<ListeGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
