import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMenuComponent } from './component-menu.component';

describe('ComponentMenuComponent', () => {
  let component: ComponentMenuComponent;
  let fixture: ComponentFixture<ComponentMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentMenuComponent]
    });
    fixture = TestBed.createComponent(ComponentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
