import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeaderComponent } from './listado-header.component';

describe('ListadoHeaderComponent', () => {
  let component: ListadoHeaderComponent;
  let fixture: ComponentFixture<ListadoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
