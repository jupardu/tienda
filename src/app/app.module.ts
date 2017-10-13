import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './cliente/index/index.component'
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';

import {ClienteModule} from './cliente/cliente.module';
import {ProductoModule} from './producto/producto.module';
import {VentaModule} from './venta/venta.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionActualComponent } from './opcion-actual/opcion-actual.component';


const appRoutes: Routes =[
  { path: 'cliente/index', component: IndexComponent },
  { path: 'producto/crear-cliente', component: CrearProductoComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionActualComponent,
   
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    IndexComponent,
    ProductoModule,
    OpcionActualComponent,
    AppComponent,
    CrearProductoComponent,
    MenuComponent,
    VentaModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
