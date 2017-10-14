import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexClienteComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexClienteComponent, CrearComponent, ListaComponent]
})
export class ClienteModule { }
