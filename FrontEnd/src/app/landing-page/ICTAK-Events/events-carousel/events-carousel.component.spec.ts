import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCarouselComponent } from './events-carousel.component';

describe('EventsCarouselComponent', () => {
  let component: EventsCarouselComponent;
  let fixture: ComponentFixture<EventsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
