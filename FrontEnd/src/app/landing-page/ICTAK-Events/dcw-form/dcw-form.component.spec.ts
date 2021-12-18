import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcwFormComponent } from './dcw-form.component';

describe('DcwFormComponent', () => {
  let component: DcwFormComponent;
  let fixture: ComponentFixture<DcwFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcwFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
