import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductoComponent } from './tienda/producto/producto.component';
import { DetalleProductoComponent } from './tienda/detalle-producto/detalle-producto.component';
import { BusquedaComponent } from './shared/busqueda/busqueda.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { UsiInteriorComponent } from './tienda/usi-interior/usi-interior.component';
import { UsiExteriorComponent } from './tienda/usi-exterior/usi-exterior.component';
import { GeamuriPVCComponent } from './tienda/geamuri-pvc/geamuri-pvc.component';
import { UsiPVCComponent } from './tienda/usi-pvc/usi-pvc.component';
import { SiteInsecteComponent } from './tienda/site-insecte/site-insecte.component';
import { AcesoriiUsiComponent } from './tienda/acesorii-usi/acesorii-usi.component';
import { SobeTeracotaComponent } from './tienda/sobe-teracota/sobe-teracota.component';
import { UsaInteriorComponent } from './tienda/usa-interior/usa-interior.component';
import { UsaExteriorComponent } from './tienda/usa-exterior/usa-exterior.component';
import { GeamPVCComponent } from './tienda/geam-pvc/geam-pvc.component';
import { SobaTeracotaComponent } from './tienda/soba-teracota/soba-teracota.component';
import { UsaPVCComponent } from './tienda/usa-pvc/usa-pvc.component';
import { DetalleUsaInteriorComponent } from './tienda/detalle-usa-interior/detalle-usa-interior.component';
import { DetalleUsaExteriorComponent } from './tienda/detalle-usa-exterior/detalle-usa-exterior.component';
import { DetalleGeamPVCComponent } from './tienda/detalle-geam-pvc/detalle-geam-pvc.component';
import { DettalleUsaPVCComponent } from './tienda/dettalle-usa-pvc/dettalle-usa-pvc.component';
import { DettalleSobaComponent } from './tienda/dettalle-soba/dettalle-soba.component';
import { DetallesitaInsecteComponent } from './tienda/detallesita-insecte/detallesita-insecte.component';
import { DetalleAcesoriiComponent } from './tienda/detalle-acesorii/detalle-acesorii.component';
import { AcesoriiComponent } from './tienda/acesorii/acesorii.component';
// modulos
import { BlogModule } from './blog/blog.module';
import { BlogRoutingModule } from './blog/blog.routing';
import { MariaRoutingModule } from './maria/maria.routes';
import { MariaModule } from './maria/maria.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    AboutComponent,
    ContactoComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    CategoriasComponent,
    ProductoComponent,
    DetalleProductoComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    // BusquedaComponent,
    LoginComponent,
    RegisterComponent,
    UsiInteriorComponent,
    UsiExteriorComponent,
    GeamuriPVCComponent,
    UsiPVCComponent,
    SiteInsecteComponent,
    AcesoriiUsiComponent,
    SobeTeracotaComponent,
    UsaInteriorComponent,
    UsaExteriorComponent,
    GeamPVCComponent,
    UsaPVCComponent,
    SobaTeracotaComponent,
    DetalleUsaInteriorComponent,
    DetalleUsaExteriorComponent,
    DetalleGeamPVCComponent,
    DettalleUsaPVCComponent,
    DettalleSobaComponent,
    DetallesitaInsecteComponent,
    DetalleAcesoriiComponent,
    AcesoriiComponent,
    ProfileComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    BlogModule,
    MariaRoutingModule,
    MariaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
