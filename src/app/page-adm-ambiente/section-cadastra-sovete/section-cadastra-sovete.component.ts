import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-section-cadastra-sovete',
  templateUrl: './section-cadastra-sovete.component.html',
  styleUrls: ['./section-cadastra-sovete.component.css']
})
export class SectionCadastraSoveteComponent {
  flavor = new FormControl();
  unitPrice = new FormControl();
  avaiableUnits = new FormControl();
  urlPhoto = new FormControl();

  constructor(private http: HttpClient) {}

  addProduto(){

    const requestBody = { name: this.flavor.value,
                          unitPrice: this.unitPrice.value,
                          avaiableUnits: this.avaiableUnits.value ,
                          urlPhoto: this.urlPhoto.value};
    console.log('Requisição enviada com o corpo:', requestBody);
    this.http.post('http://localhost:8080/sorvetada/api/icecream/create', requestBody).subscribe(
      (data: any) => {
        console.log('Resposta recebida:', data);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );


  }

}
