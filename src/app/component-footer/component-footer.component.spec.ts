import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFooterComponent } from './component-footer.component';

describe('ComponentFooterComponent', () => {
  let component: ComponentFooterComponent;
  let fixture: ComponentFixture<ComponentFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFooterComponent]
    });
    fixture = TestBed.createComponent(ComponentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
