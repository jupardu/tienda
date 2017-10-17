import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(private http: Http) {}

  listaClientes() {
    this.http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe (
      (res: Response) => {
        const clients = res.json();
        console.log(clients);
      }
    );
  }

}
