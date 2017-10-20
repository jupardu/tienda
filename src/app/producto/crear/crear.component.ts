import { Component, OnInit } from '@angular/core';

import { ProductoDataServerService } from '../producto-data-server.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  producto: Producto;

  constructor(private productoService: ProductoDataServerService) { }

  ngOnInit() {
    this.producto = new Producto();
  }
  onSaveProducto() {
    this.productoService.saveProductos(this.producto);
    this.producto = new Producto();
  }

}
