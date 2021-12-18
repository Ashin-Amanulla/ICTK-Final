import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaiFormComponent } from './mlai-form.component';

describe('MlaiFormComponent', () => {
  let component: MlaiFormComponent;
  let fixture: ComponentFixture<MlaiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlaiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
