import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BusquedaComponent } from './shared/busqueda/busqueda.component';
import { UsaInteriorComponent } from './tienda/usa-interior/usa-interior.component';
import { UsaExteriorComponent } from './tienda/usa-exterior/usa-exterior.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { UsiInteriorComponent } from './tienda/usi-interior/usi-interior.component';
import { DetalleUsaInteriorComponent } from './tienda/detalle-usa-interior/detalle-usa-interior.component';
import { UsiExteriorComponent } from './tienda/usi-exterior/usi-exterior.component';
import { DetalleUsaExteriorComponent } from './tienda/detalle-usa-exterior/detalle-usa-exterior.component';
import { GeamuriPVCComponent } from './tienda/geamuri-pvc/geamuri-pvc.component';
import { GeamPVCComponent } from './tienda/geam-pvc/geam-pvc.component';
import { DetalleGeamPVCComponent } from './tienda/detalle-geam-pvc/detalle-geam-pvc.component';
import { UsiPVCComponent } from './tienda/usi-pvc/usi-pvc.component';
import { UsaPVCComponent } from './tienda/usa-pvc/usa-pvc.component';
import { DettalleUsaPVCComponent } from './tienda/dettalle-usa-pvc/dettalle-usa-pvc.component';
import { SobeTeracotaComponent } from './tienda/sobe-teracota/sobe-teracota.component';
import { DettalleSobaComponent } from './tienda/dettalle-soba/dettalle-soba.component';
import { SobaTeracotaComponent } from './tienda/soba-teracota/soba-teracota.component';
import { SiteInsecteComponent } from './tienda/site-insecte/site-insecte.component';
import { DetallesitaInsecteComponent } from './tienda/detallesita-insecte/detallesita-insecte.component';
import { AcesoriiUsiComponent } from './tienda/acesorii-usi/acesorii-usi.component';
import { DetalleAcesoriiComponent } from './tienda/detalle-acesorii/detalle-acesorii.component';
import { BlogComponent } from './blog/blog.component';
import { MariaComponent } from './maria/maria.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { BlogRoutingModule } from './blog/blog.routing';
import { MariaRoutingModule } from './maria/maria.routes';








const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'maria', component: MariaComponent },

  {
    path: '',
    component: BlogComponent,
     loadChildren: ''
},
{
  path: '',
  component: MariaComponent,
   loadChildren: ''
},
  { path: 'app', component: AppComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'buscar/:termino', component: BusquedaComponent },
  { path: 'usaInterior/:id', component: UsaInteriorComponent },
  { path: 'usaExterior/:id', component: UsaExteriorComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'usiInterior', component: UsiInteriorComponent },
  { path: 'usaInterior', component: UsaInteriorComponent },
  { path: 'detalleUsaInterior', component: DetalleUsaInteriorComponent },
  { path: 'usiExterior', component: UsiExteriorComponent },
  { path: 'usaExterior', component: UsaExteriorComponent },
  { path: 'detalleUsaExterior', component: DetalleUsaExteriorComponent },
  { path: 'geamuriPVC', component: GeamuriPVCComponent },
  { path: 'geamPVC', component: GeamPVCComponent },
  { path: 'detalleGeamPVC', component: DetalleGeamPVCComponent },
  { path: 'usiPVC', component: UsiPVCComponent },
  { path: 'usaPVC', component: UsaPVCComponent },
  { path: 'detalleUsaPVC', component: DettalleUsaPVCComponent },
  { path: 'sobeTeracota', component: SobeTeracotaComponent },
  { path: 'detalleSoba', component: DettalleSobaComponent },
  { path: 'sobaTeracota', component: SobaTeracotaComponent },
  { path: 'siteInsecte', component: SiteInsecteComponent },
  { path: 'detalleSiteInsecte', component: DetallesitaInsecteComponent },
  { path: 'acesoriiUsi', component: AcesoriiUsiComponent },
  { path: 'detalleAcesorii', component: DetalleAcesoriiComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'blog', component: BlogComponent },
   { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'footer', component: FooterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), BlogRoutingModule, MariaRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
