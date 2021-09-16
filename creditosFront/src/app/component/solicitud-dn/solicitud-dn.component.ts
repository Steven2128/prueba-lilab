import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/entitys/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud-dn',
  templateUrl: './solicitud-dn.component.html',
  styleUrls: ['./solicitud-dn.component.css']
})
export class SolicitudDNComponent implements OnInit {

  solicitudes?:Solicitud[];

  constructor(private servicioSolicitud:SolicitudService) { }

  ngOnInit(): void {
    this.getSolicitudesDN();
  }

  getSolicitudesDN(){
    this.servicioSolicitud.getSolicitudesDN().subscribe(
      res=>{
        this.solicitudes = res;
      }
    )
  }

}
