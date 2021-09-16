import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAPComponent } from './solicitud-ap.component';

describe('SolicitudAPComponent', () => {
  let component: SolicitudAPComponent;
  let fixture: ComponentFixture<SolicitudAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
