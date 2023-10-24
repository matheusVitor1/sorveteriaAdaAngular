import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAboutComponent } from './component-about.component';

describe('ComponentAboutComponent', () => {
  let component: ComponentAboutComponent;
  let fixture: ComponentFixture<ComponentAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAboutComponent]
    });
    fixture = TestBed.createComponent(ComponentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
