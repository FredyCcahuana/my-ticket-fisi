import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProveedorComponent } from './home-proveedor.component';

describe('HomeProveedorComponent', () => {
  let component: HomeProveedorComponent;
  let fixture: ComponentFixture<HomeProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
