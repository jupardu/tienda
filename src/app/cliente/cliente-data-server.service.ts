import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteDataServerService {

  clienteList: Array<Cliente>;

  constructor(private http: HttpClient) {
  }
  cargarClientes(){
    this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente').subscribe(data => {
    // Leer el resultado de la respuesta del JSON
    this.clienteList = data as Array<Cliente>;
    });
  }
}

