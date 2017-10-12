import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrearClienteComponent, ListarClienteComponent]
})
export class ClienteModule { }
