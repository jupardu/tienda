import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';

@Injectable()
export class ProductoDataServerService {
  productoList: Array<Producto>;

  constructor(private http: HttpClient) { }
  cargarProductos() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.producto')
    .subscribe(data => {
      this.productoList = data as Array<Producto>;
    });
  }
  saveProductos(producto: Producto) {
        const body = {codigo: producto.codigo, nombre: producto.nombre, precio: producto.precio};
        this.http.post('http://localhost:8080/tienda/webresources/entidades.producto', body)
        .subscribe(data => {
          this.cargarProductos();
        });
      }
}
