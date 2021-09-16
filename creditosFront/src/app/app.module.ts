import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './component/solicitud/solicitud.component';
import { SolicitudAPComponent } from './component/solicitud-ap/solicitud-ap.component';
import { SolicitudDNComponent } from './component/solicitud-dn/solicitud-dn.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SolicitudComponent,
    SolicitudAPComponent,
    SolicitudDNComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
