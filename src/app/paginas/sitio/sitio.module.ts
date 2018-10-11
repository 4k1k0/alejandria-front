import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioRoutingModule } from './sitio-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { SitioComponent } from './sitio.component';
import { InicioComponent } from './inicio/inicio.component';
import { SoftwareComponent } from './software/software.component';
import { BrowserComponent } from './browser/browser.component';

@NgModule({
  imports: [
    CommonModule,
    SitioRoutingModule
  ],
  declarations: [CabeceraComponent, FooterComponent, SitioComponent, InicioComponent, SoftwareComponent, BrowserComponent]
})
export class SitioModule { }
