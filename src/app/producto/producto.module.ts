import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexProductoComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { CrearComponent } from './crear/crear.component';
import { ProductoDataServerService } from './producto-data-server.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule 
    ],
  declarations: [IndexProductoComponent, ListaComponent, CrearComponent],
  providers:[ProductoDataServerService]
})
export class ProductoModule { }
