
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { EditventanaComponent } from './edit-producto/edit-ventana.component';
import { EditPuertaComponent } from './edit-producto/edit-puerta.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearPuertaComponent } from './crear-producto/crear-puerta.component';
import { CrearVentanaComponent } from './crear-producto/crear-ventana.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { DashboardMariaComponent } from './dashboard-maria/dashboard-maria.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { UploadComponent } from '../upload/upload.component';
import { MariaRoutingModule } from './maria.routes';
import { AppComponent } from '../app.component';
import { EditPuertaPvcComponent } from './edit-producto/edit-puerta-pvc/edit-puerta-pvc.component';
import { EditSobaTeracotaComponent } from './edit-producto/edit-soba-teracota/edit-soba-teracota.component';





@NgModule({
  declarations: [

    EditProductoComponent,
    CrearPuertaComponent,
    CrearVentanaComponent,
    CrearProductoComponent,
    EditProductoComponent,
    EditPuertaComponent,
    EditventanaComponent,
    EditventanaComponent,
    UsuariosComponent,
    DashboardMariaComponent,
    ProgressComponent,
    PromesasComponent,
    RxjsComponent,
    AccoutSettingsComponent,
    Graficas1Component,
     GraficasComponent,
     EditPuertaPvcComponent,
     EditSobaTeracotaComponent,
    
    //UploadComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
     CommonModule,
     MariaRoutingModule,
    // SharedModule,

     
    // ChartsModule,

    // PipesModule

  ],
  exports: [
    EditProductoComponent,
    CrearPuertaComponent,
    CrearVentanaComponent,
    CrearProductoComponent,
    EditProductoComponent,
    EditPuertaComponent,
    EditventanaComponent,
    EditventanaComponent,
    UsuariosComponent,
    DashboardMariaComponent,
    ProgressComponent,
    GraficasComponent,
    PromesasComponent,
    RxjsComponent,
    AccoutSettingsComponent,
    Graficas1Component,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class MariaModule { }
