import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexClienteComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';
import { ClienteDataServerService } from './cliente-data-server.service';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexClienteComponent, CrearComponent, ListaComponent],
  providers:[ClienteDataServerService]
})
export class ClienteModule { }
