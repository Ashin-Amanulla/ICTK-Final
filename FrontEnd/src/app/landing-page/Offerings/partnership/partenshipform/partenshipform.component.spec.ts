import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenshipformComponent } from './partenshipform.component';

describe('PartenshipformComponent', () => {
  let component: PartenshipformComponent;
  let fixture: ComponentFixture<PartenshipformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenshipformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenshipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
