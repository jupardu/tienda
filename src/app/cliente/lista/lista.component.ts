import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public cliente: Cliente;
  constructor() { 
    this.cliente = new Cliente();
  }

  ngOnInit() {
    this.cliente.id = "2345";
    this.cliente.nombre = "pepito";
  }

}
