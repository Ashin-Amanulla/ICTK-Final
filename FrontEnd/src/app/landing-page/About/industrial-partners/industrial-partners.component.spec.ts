import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialPartnersComponent } from './industrial-partners.component';

describe('IndustrialPartnersComponent', () => {
  let component: IndustrialPartnersComponent;
  let fixture: ComponentFixture<IndustrialPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
