import { Component, OnInit } from '@angular/core';
import { VentaDataServerService } from '../venta-data-server.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private ventaService: VentaDataServerService) { }

  ngOnInit() {
    this.ventaService.cargarVentas();
  }
}
