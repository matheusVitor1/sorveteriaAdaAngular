import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastroClienteComponent } from './page-cadastro-cliente.component';

describe('PageCadastroClienteComponent', () => {
  let component: PageCadastroClienteComponent;
  let fixture: ComponentFixture<PageCadastroClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCadastroClienteComponent]
    });
    fixture = TestBed.createComponent(PageCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
