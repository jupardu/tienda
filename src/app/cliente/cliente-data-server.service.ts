import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ClienteDataServerService {

  clienteList: Array<Cliente>;

  constructor(private http: HttpClient) {
  }
  cargarClientes() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente')
    .subscribe(data => {
      this.clienteList = data as Array<Cliente>;
    });
  }
  saveClientes(cliente: Cliente) {
    const body = {id: cliente.id, nombre: cliente.nombre, direccion: cliente.direccion, correo: cliente.correo, telefono: cliente.telefono};
    this.http.post('http://localhost:8080/tienda/webresources/entidades.cliente', body)
    .subscribe(data => {
      this.cargarClientes();
    });
  }
}
