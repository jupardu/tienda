import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { IndexClienteComponent } from './cliente/index/index.component';
import { IndexProductoComponent } from './producto/index/index.component';
import { IndexVentaComponent } from './venta/index/index.component';

import {ClienteModule} from './cliente/cliente.module';
import {ProductoModule} from './producto/producto.module';
import {VentaModule} from './venta/venta.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionActualComponent } from './opcion-actual/opcion-actual.component';

const appRoutes: Routes =[
  { path: 'cliente/index', component: IndexClienteComponent },
  { path: 'producto/index', component: IndexProductoComponent },
  { path: 'venta/index', component: IndexVentaComponent },
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
    ProductoModule,
    VentaModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
