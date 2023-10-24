import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWishListComponent } from './component-wish-list.component';

describe('ComponentWishListComponent', () => {
  let component: ComponentWishListComponent;
  let fixture: ComponentFixture<ComponentWishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentWishListComponent]
    });
    fixture = TestBed.createComponent(ComponentWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
