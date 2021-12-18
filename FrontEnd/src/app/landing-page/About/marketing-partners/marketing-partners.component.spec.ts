import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPartnersComponent } from './marketing-partners.component';

describe('MarketingPartnersComponent', () => {
  let component: MarketingPartnersComponent;
  let fixture: ComponentFixture<MarketingPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
