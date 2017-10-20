import { Component, OnInit } from '@angular/core';

import { VentaDataServerService } from '../venta-data-server.service';
import { Venta } from '../venta';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  venta: Venta;
  
    constructor(private ventaService: VentaDataServerService) { }
  
    ngOnInit() {
      this.venta = new Venta();
    }
    onSaveVenta() {
      this.ventaService.saveVenta(this.venta);
      this.venta = new Venta();
    }
  
  }