import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from './venta';

@Injectable()
export class VentaDataServerService {

  ventaList: Array<Venta>;

  constructor(private http: HttpClient) { }

  cargarVentas() {
    this.http.get('http://localhost:8080/tienda/webresources/entidades.venta')
    .subscribe(data => {
      this.ventaList = data as Array<Venta>;
    });

  }
}
