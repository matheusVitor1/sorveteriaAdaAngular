import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExcluirSorveteComponent } from './section-excluir-sorvete.component';

describe('SectionExcluirSorveteComponent', () => {
  let component: SectionExcluirSorveteComponent;
  let fixture: ComponentFixture<SectionExcluirSorveteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionExcluirSorveteComponent]
    });
    fixture = TestBed.createComponent(SectionExcluirSorveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
