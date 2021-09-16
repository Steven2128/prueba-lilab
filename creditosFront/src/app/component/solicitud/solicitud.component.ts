import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/entitys/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  nuevasolicitud:Solicitud = new Solicitud();

  solicitudes?:Solicitud[];

  constructor(private servicioSolicitud:SolicitudService) { }

  ngOnInit(): void {
    this.getSolicitudesET();
  }

  getSolicitudesET(){
    this.servicioSolicitud.getSolicitudesET().subscribe(
      res=>{
        this.solicitudes = res;
      }
    )
  }

  aprobar(){
    this.servicioSolicitud.apSolicitud(this.nuevasolicitud).subscribe(
      res=>{
        console.log(this.nuevasolicitud.id);
        this.getSolicitudesET();
      }
    )
  }

}
