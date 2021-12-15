import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateformComponent } from './corporateform.component';

describe('CorporateformComponent', () => {
  let component: CorporateformComponent;
  let fixture: ComponentFixture<CorporateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
