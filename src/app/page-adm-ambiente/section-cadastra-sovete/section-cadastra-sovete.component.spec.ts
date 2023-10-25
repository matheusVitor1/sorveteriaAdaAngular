import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCadastraSoveteComponent } from './section-cadastra-sovete.component';

describe('SectionCadastraSoveteComponent', () => {
  let component: SectionCadastraSoveteComponent;
  let fixture: ComponentFixture<SectionCadastraSoveteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCadastraSoveteComponent]
    });
    fixture = TestBed.createComponent(SectionCadastraSoveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
