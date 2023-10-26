import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditarFotoComponent } from './section-editar-foto.component';

describe('SectionEditarFotoComponent', () => {
  let component: SectionEditarFotoComponent;
  let fixture: ComponentFixture<SectionEditarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEditarFotoComponent]
    });
    fixture = TestBed.createComponent(SectionEditarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
