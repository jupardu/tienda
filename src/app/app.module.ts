import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
=======
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './cliente/index/index.component'
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';

import {ClienteModule} from './cliente/cliente.module';
import {ProductoModule} from './producto/producto.module';
import {VentaModule} from './venta/venta.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes =[
  { path: 'cliente/index', component: IndexComponent },
  { path: 'producto/crear-cliente', component: CrearProductoComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ProductoModule,
    VentaModule,
    RouterModule.forRoot(
      appRoutes
    )
>>>>>>> ca7d81027ce0b22561881e1dfc50baae147db5ec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
