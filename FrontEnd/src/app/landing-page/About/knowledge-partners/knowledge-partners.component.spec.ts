import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePartnersComponent } from './knowledge-partners.component';

describe('KnowledgePartnersComponent', () => {
  let component: KnowledgePartnersComponent;
  let fixture: ComponentFixture<KnowledgePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
