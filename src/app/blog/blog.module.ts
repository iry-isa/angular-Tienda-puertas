import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ng2-charts


import { BlogComponent } from './blog.component';
import { SeccionsComponent } from './seccions/seccions.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DetalleArticuloComponent } from './detalle-articulo/detalle-articulo.component';
import { EditArticuloComponent } from './edit-articulo/edit-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { UploadComponent } from '../upload/upload.component';

import { BusquedaComponent } from '../shared/busqueda/busqueda.component';
import { AppComponent } from '../app.component';
import { BlogRoutingModule } from './blog.routing';


//import { ProgressComponent } from './progress/progress.component';
//import { GraficasComponent } from './graficas/graficas.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { RxjsComponent } from './rxjs/rxjs.component';
//import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
//import { Graficas1Component } from './graficas1/graficas1.component';




@NgModule({
  declarations: [
    SeccionsComponent,
    ArticulosComponent,
    ArticuloComponent ,
    DetalleArticuloComponent,
    EditArticuloComponent,
    CrearArticuloComponent,
   // BusquedaComponent,
    DashboardComponent,
    UploadComponent,
    //ProgressComponent,
    //GraficasComponent,
    //PromesasComponent,
    //RxjsComponent,
    //AccoutSettingsComponent,
    //Graficas1Component

  ],
  imports: [
    BrowserModule,
     CommonModule,
     FormsModule,
     BlogRoutingModule
   // SharedModule,
    // ChartsModule,

    // PipesModule

  ],
  exports: [
    SeccionsComponent,
    ArticulosComponent,
    ArticuloComponent ,
    DetalleArticuloComponent,
    DashboardComponent,
    UploadComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class BlogModule { }
