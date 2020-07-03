import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardMariaComponent } from './dashboard-maria/dashboard-maria.component';

// import { ProgressComponent } from './progress/progress.component';

// import { Graficas1Component } from './graficas1/graficas1.component';

// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from '../shared/profile/profile.component';

// Guards
// import { MariaGuardGuard } from '../services/service.index';
// import { AdminGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';

import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearVentanaComponent } from './crear-producto/crear-ventana.component';
import { CrearPuertaComponent } from './crear-producto/crear-puerta.component';
// import { BusquedaComponent } from './busqueda/busqueda.component';
// import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { ProductosComponent } from '../tienda/productos/productos.component';
import { ProductoComponent } from '../tienda/producto/producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { EditPuertaComponent } from './edit-producto/edit-puerta.component';
import { EditventanaComponent } from './edit-producto/edit-ventana.component';
import { BusquedaComponent } from '../shared/busqueda/busqueda.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';





const routes: Routes = [
{
        path: 'dashboardmaria', component: DashboardMariaComponent, data: { titulo: 'DashboardMaria' }
        // canActivate: [ VerificaTokenGuard ],
    },

    { path: 'crearproducto', component: CrearProductoComponent, data: { titulo: 'CrearProducto' } },
    { path: 'crearpurta', component: CrearPuertaComponent, data: { titulo: 'CrearPuerta' } },
    { path: 'crearventana', component: CrearVentanaComponent, data: { titulo: 'CrearVentana' } },
    { path: 'editarproducto', component: EditProductoComponent, data: { titulo: 'EditProducto' } },
    { path: 'editarpuerta', component: EditPuertaComponent, data: { titulo: 'EditPuerta' } },
    { path: 'editarventana', component: EditventanaComponent, data: { titulo: 'EditVentana' } },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        // canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'productos', component: ProductosComponent, data: { titulo: 'Mantenimiento de productos' } },
    { path: 'producto/:id', component: ProductoComponent, data: { titulo: 'Actualizar producto' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MariaRoutingModule {}

