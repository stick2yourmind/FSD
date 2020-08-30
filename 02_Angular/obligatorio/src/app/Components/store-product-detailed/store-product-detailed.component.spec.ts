import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductDetailedComponent } from './store-product-detailed.component';

describe('StoreProductDetailedComponent', () => {
  let component: StoreProductDetailedComponent;
  let fixture: ComponentFixture<StoreProductDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
