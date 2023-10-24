import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnderecoComponent } from './page-endereco.component';

describe('PageEnderecoComponent', () => {
  let component: PageEnderecoComponent;
  let fixture: ComponentFixture<PageEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEnderecoComponent]
    });
    fixture = TestBed.createComponent(PageEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
