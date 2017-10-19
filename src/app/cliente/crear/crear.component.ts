import { Component, OnInit } from '@angular/core';

import { ClienteDataServerService } from '../cliente-data-server.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  cliente:  Cliente;

  constructor(private clienteService: ClienteDataServerService) { }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onSaveCliente(){
    this.clienteService.saveClientes(this.cliente);
    this.cliente = new Cliente();
  }

}
