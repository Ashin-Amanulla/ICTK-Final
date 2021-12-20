import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtComponent } from './abt.component';

describe('AbtComponent', () => {
  let component: AbtComponent;
  let fixture: ComponentFixture<AbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
