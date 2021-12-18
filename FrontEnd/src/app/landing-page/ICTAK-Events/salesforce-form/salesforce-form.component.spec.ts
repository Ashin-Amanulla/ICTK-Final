import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceFormComponent } from './salesforce-form.component';

describe('SalesforceFormComponent', () => {
  let component: SalesforceFormComponent;
  let fixture: ComponentFixture<SalesforceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesforceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
