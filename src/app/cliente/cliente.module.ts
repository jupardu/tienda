import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, CrearComponent, ListaComponent,]
})
export class ClienteModule { }
