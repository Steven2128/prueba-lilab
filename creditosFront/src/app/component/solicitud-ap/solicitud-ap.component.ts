import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/entitys/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud-ap',
  templateUrl: './solicitud-ap.component.html',
  styleUrls: ['./solicitud-ap.component.css']
})
export class SolicitudAPComponent implements OnInit {

  solicitudes?:Solicitud[];

  constructor(private servicioSolicitud:SolicitudService) { }

  ngOnInit(): void {
    this.getSolicitudesAP();
  }

  getSolicitudesAP(){
    this.servicioSolicitud.getSolicitudesAP().subscribe(
      res=>{
        this.solicitudes = res;
      }
    )
  }

}
