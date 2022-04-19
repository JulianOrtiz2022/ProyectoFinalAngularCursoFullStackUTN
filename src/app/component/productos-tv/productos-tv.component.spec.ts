import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTvComponent } from './productos-tv.component';

describe('ProductosTvComponent', () => {
  let component: ProductosTvComponent;
  let fixture: ComponentFixture<ProductosTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
