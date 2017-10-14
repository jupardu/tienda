import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexVentaComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexVentaComponent, CrearComponent, ListaComponent]
})
export class VentaModule { }
