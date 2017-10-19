import { Component, OnInit } from '@angular/core';
import { ProductoDataServerService } from '../producto-data-server.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private productoService: ProductoDataServerService) { }

  ngOnInit() {
    this.productoService.cargarProductos();
    console.log(this.productoService.productoList);
    
  }

}
