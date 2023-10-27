import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPedidosCustomerComponent } from './section-pedidos-customer.component';

describe('SectionPedidosCustomerComponent', () => {
  let component: SectionPedidosCustomerComponent;
  let fixture: ComponentFixture<SectionPedidosCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPedidosCustomerComponent]
    });
    fixture = TestBed.createComponent(SectionPedidosCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
