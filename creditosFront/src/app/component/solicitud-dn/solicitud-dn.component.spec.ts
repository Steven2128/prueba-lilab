import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDNComponent } from './solicitud-dn.component';

describe('SolicitudDNComponent', () => {
  let component: SolicitudDNComponent;
  let fixture: ComponentFixture<SolicitudDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudDNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
