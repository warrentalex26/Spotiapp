import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  paises: any = [];
  // Al inyectarlo desde el constructor podemos acceder a todas las propiedades y metoodos de HttpClient
  constructor(private http: HttpClient) {
    console.log('Contructor del home llamado');
    this.http.get('https://restcountries.eu/rest/v2/lang/es') // Con el subscribe obtenemos la informacion
      .subscribe((data: any) => {
        this.paises = data;
        console.log(this.paises);
      });
  }

  ngOnInit() {
  }

}
