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

  ventaC: Venta;
  clienteC: Cliente;
  productoC: Producto;

    constructor(private ventaService: VentaDataServerService) { }

    ngOnInit() {
      this.ventaC = new Venta();
      this.clienteC = new Cliente();
      this.productoC = new Producto();
      this.ventaService.cargarClientes();
      this.ventaService.cargarProductos();

    }
    onSaveVenta() {
      this.ventaService.saveVenta(this.ventaC, this.clienteC, this.productoC);
      this.ventaC = new Venta();
      this.clienteC = new Cliente();
      this.productoC = new Producto();
    }
  }
