import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarProductoComponent, CrearProductoComponent]
})
export class ProductoModule { }
