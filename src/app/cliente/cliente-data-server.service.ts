import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Http, Response } from '@angular/http';

@Injectable()
export class ClienteDataServerService {

  clienteList: Array<Cliente>;

  constructor(private http: Http) {
  }
  cargarClientes() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente').subscribe (
      (res: Response) => {
        const clients = res.json();
        console.log(clients);
      }
    );
  }
}
