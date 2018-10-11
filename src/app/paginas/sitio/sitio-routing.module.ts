import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitioComponent } from './sitio.component';
import { InicioComponent } from './inicio/inicio.component';
import { SoftwareComponent } from './software/software.component';
import { BrowserComponent } from './browser/browser.component';

const routes: Routes = [
   {
     path: '',
     component: SitioComponent,
     children: [
       {
         path: '',
         component: InicioComponent
       },
       {
         path: 'software',
         component: SoftwareComponent
       },
       {
         path: 'browser',
         component: BrowserComponent
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitioRoutingModule { }
