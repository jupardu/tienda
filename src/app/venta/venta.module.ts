import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVentaComponent } from './crear-venta/crear-venta.component';
import { ListarVentaComponent } from './listar-venta/listar-venta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrearVentaComponent, ListarVentaComponent]
})
export class VentaModule { }
