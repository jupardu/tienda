import { Component, OnInit } from '@angular/core';

import { VentaDataServerService } from '../venta-data-server.service';
import { ClienteDataServerService } from '../../cliente/cliente-data-server.service';
import { Venta } from '../venta';
import { Cliente } from '../../cliente/cliente';
import { Producto } from '../../producto/producto';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  venta: Venta;
  cliente: Cliente;
  producto: Producto;

    constructor(private ventaService: VentaDataServerService) { }

    ngOnInit() {
      this.venta = new Venta();
      this.ventaService.cargarClientes();
      this.ventaService.cargarProductos();

    }
    onSaveVenta() {
      this.ventaService.saveVenta(this.venta, this.cliente, this.producto);
      this.venta = new Venta();
    }
  }
