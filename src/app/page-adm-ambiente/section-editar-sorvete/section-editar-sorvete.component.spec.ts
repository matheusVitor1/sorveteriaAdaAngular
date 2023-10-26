import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditarSorveteComponent } from './section-editar-sorvete.component';

describe('SectionEditarSorveteComponent', () => {
  let component: SectionEditarSorveteComponent;
  let fixture: ComponentFixture<SectionEditarSorveteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEditarSorveteComponent]
    });
    fixture = TestBed.createComponent(SectionEditarSorveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
