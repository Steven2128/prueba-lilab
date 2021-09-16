import { Injectable } from '@angular/core';
import { Solicitud } from '../entitys/solicitud';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private url = 'http://127.0.0.1:8000/solicitudes/';

  constructor(private http: HttpClient) { }

  getSolicitudesET():Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.url+'listado/en-tramite/');
  }

  getSolicitudesAP():Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.url+'listado/aprobados/');
  }

  getSolicitudesDN():Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.url+'listado/denegados/');
  }

  apSolicitud(solicitud:Solicitud):Observable<Solicitud[]>{
    return this.http.put<Solicitud[]>(this.url+'aprobar/'+solicitud.id, solicitud);
  }
}
