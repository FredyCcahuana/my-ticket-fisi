import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEventoComponent } from './register-evento.component';

describe('RegisterEventoComponent', () => {
  let component: RegisterEventoComponent;
  let fixture: ComponentFixture<RegisterEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
