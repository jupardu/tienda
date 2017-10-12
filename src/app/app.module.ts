import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ClienteModule} from './cliente/cliente.module';
import {ProductoModule} from './producto/producto.module';
import {VentaModule} from './venta/venta.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ProductoModule,
    VentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
