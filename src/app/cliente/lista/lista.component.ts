import { Component, OnInit } from '@angular/core';
import { ClienteDataServerService } from '../cliente-data-server.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  constructor(private clienteService: ClienteDataServerService) {}

    ngOnInit() {
      this.clienteService.cargarClientes();
    }
  }

