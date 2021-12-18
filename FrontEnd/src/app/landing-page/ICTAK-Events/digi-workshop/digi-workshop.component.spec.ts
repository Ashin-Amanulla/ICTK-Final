import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiWorkshopComponent } from './digi-workshop.component';

describe('DigiWorkshopComponent', () => {
  let component: DigiWorkshopComponent;
  let fixture: ComponentFixture<DigiWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
