import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, ListaComponent, CrearComponent]
})
export class ProductoModule { }
