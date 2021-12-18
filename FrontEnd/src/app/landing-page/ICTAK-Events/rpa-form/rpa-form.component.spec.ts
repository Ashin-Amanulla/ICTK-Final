import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpaFormComponent } from './rpa-form.component';

describe('RpaFormComponent', () => {
  let component: RpaFormComponent;
  let fixture: ComponentFixture<RpaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
