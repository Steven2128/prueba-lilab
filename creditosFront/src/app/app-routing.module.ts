import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './component/solicitud/solicitud.component';
import { SolicitudAPComponent } from './component/solicitud-ap/solicitud-ap.component';
import { SolicitudDNComponent } from './component/solicitud-dn/solicitud-dn.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'tramite', component: SolicitudComponent},
  { path: 'aprobado', component: SolicitudAPComponent},
  { path: 'denegado', component: SolicitudDNComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
