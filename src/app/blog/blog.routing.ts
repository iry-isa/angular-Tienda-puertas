import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SeccionsComponent } from './seccions/seccions.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DetalleArticuloComponent } from './detalle-articulo/detalle-articulo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { EditArticuloComponent } from './edit-articulo/edit-articulo.component';
import { ProfileComponent } from '../shared/profile/profile.component';



const routes: Routes = [
    { path: 'seccion', component: SeccionsComponent },
    { path: 'articulos', component: ArticulosComponent },
    { path: 'articulo', component: ArticuloComponent, data: { titulo: 'Articulo' }},
    {path: 'detalleArticulo', component: DetalleArticuloComponent },
    {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }
        // canActivate: [ VerificaTokenGuard ],
    },

    { path: 'creararticulo', component: CrearArticuloComponent, data: { titulo: 'CrearArticulo' }
    // canActivate: [ VerificaTokenGuard ],
 },
    { path: 'editarticulo', component: EditArticuloComponent, data: { titulo: 'EditArticulo' }
    // canActivate: [ VerificaTokenGuard ],
 },
    // { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    // { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    // { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    { path: 'articulos', component: ArticulosComponent },
    { path: 'articulo', component: ArticuloComponent },
    {path: 'detalleArticulo', component: DetalleArticuloComponent },
    { path: '', redirectTo: '/seccion', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}


