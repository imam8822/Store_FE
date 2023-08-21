import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoPanelComponent } from './product-info-panel.component';

describe('ProductInfoPanelComponent', () => {
  let component: ProductInfoPanelComponent;
  let fixture: ComponentFixture<ProductInfoPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInfoPanelComponent]
    });
    fixture = TestBed.createComponent(ProductInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
