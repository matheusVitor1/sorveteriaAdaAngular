import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCustomerHeaderComponent } from './section-customer-header.component';

describe('SectionCustomerHeaderComponent', () => {
  let component: SectionCustomerHeaderComponent;
  let fixture: ComponentFixture<SectionCustomerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCustomerHeaderComponent]
    });
    fixture = TestBed.createComponent(SectionCustomerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
