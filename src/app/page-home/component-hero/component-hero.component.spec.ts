import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHeroComponent } from './component-hero.component';

describe('ComponentHeroComponent', () => {
  let component: ComponentHeroComponent;
  let fixture: ComponentFixture<ComponentHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentHeroComponent]
    });
    fixture = TestBed.createComponent(ComponentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
