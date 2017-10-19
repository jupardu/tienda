import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexVentaComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';
import { VentaDataServerService } from './venta-data-server.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexVentaComponent, CrearComponent, ListaComponent],
  providers:[VentaDataServerService]
})
export class VentaModule { }
