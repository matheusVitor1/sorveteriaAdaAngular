import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdmAmbienteComponent } from './page-adm-ambiente.component';

describe('PageAdmAmbienteComponent', () => {
  let component: PageAdmAmbienteComponent;
  let fixture: ComponentFixture<PageAdmAmbienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdmAmbienteComponent]
    });
    fixture = TestBed.createComponent(PageAdmAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
