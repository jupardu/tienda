import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './cliente/index/index.component'
import { CrearComponent } from './producto/crear/crear.component';

import {ClienteModule} from './cliente/cliente.module';
import {ProductoModule} from './producto/producto.module';
import {VentaModule} from './venta/venta.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionActualComponent } from './opcion-actual/opcion-actual.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const appRoutes: Routes =[
  { path: 'cliente/index', component: IndexComponent },
  { path: 'producto/crear', component: CrearComponent }
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
