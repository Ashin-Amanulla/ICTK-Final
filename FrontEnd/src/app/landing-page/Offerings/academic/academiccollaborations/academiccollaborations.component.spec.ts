import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiccollaborationsComponent } from './academiccollaborations.component';

describe('AcademiccollaborationsComponent', () => {
  let component: AcademiccollaborationsComponent;
  let fixture: ComponentFixture<AcademiccollaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiccollaborationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiccollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
