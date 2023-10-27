import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-editar-sorvete',
  templateUrl: './section-editar-sorvete.component.html',
  styleUrls: ['./section-editar-sorvete.component.css']
})
export class SectionEditarSorveteComponent {
  id = new FormControl();
  unitPrice = new FormControl();

  constructor(private http: HttpClient) {}

  editaProduto(){

    const requestBody = {
      id: this.id.value,
      unitPrice: this.unitPrice.value};

    console.log('Requisição enviada com o corpo:', requestBody);
    this.http.put('http://localhost:8080/sorvetada/api/icecream/updateUnitPrice', requestBody).subscribe(
      (data: any) => {
        console.log('Resposta recebida:', data);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );

  }
}
