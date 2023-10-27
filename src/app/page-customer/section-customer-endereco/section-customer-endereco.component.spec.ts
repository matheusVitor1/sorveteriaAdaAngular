import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCustomerEnderecoComponent } from './section-customer-endereco.component';

describe('SectionCustomerEnderecoComponent', () => {
  let component: SectionCustomerEnderecoComponent;
  let fixture: ComponentFixture<SectionCustomerEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCustomerEnderecoComponent]
    });
    fixture = TestBed.createComponent(SectionCustomerEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
