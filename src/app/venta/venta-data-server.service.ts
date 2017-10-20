import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from './venta';
import { Cliente } from '../cliente/cliente';
import { Producto } from '../producto/producto';

@Injectable()
export class VentaDataServerService {

  ventaList: Array<Venta>;
  clienteVentaList: Array<Cliente>;
  productoVentaList: Array<Producto>;

  constructor(private http: HttpClient) { }

  cargarClientes() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente')
    .subscribe(data => {
      this.clienteVentaList = data as Array<Cliente>;
    });
  }

  cargarProductos() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.producto')
    .subscribe(data => {
      this.productoVentaList = data as Array<Producto>;
    });
  }

  cargarVentas() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.venta')
    .subscribe(data => {
      this.ventaList = data as Array<Venta>;
    });

  }

  saveVenta(venta: Venta, clienteP: Cliente, productoP: Producto) {
        const body = {
          numero: venta.numero,
          idcliente: {
            id: clienteP.id
          },
          codigoproducto: {
            codigo: productoP.codigo
          },
          cantidad: venta.cantidad,
          valortotal: venta.valortotal};
          this.http.post('http://localhost:8080/tienda/webresources/entidades.venta', body)
          .subscribe(data => {
            this.cargarVentas();
          });
      }
}
