import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-excluir-sorvete',
  templateUrl: './section-excluir-sorvete.component.html',
  styleUrls: ['./section-excluir-sorvete.component.css']
})
export class SectionExcluirSorveteComponent {
  id = new FormControl();

  constructor(private http: HttpClient) {}

  deleteProduto() {
    const id = this.id.value;

    this.http.delete(`http://localhost:8080/sorvetada/api/icecream/delete/${id}`).subscribe(
      (data: any) => {
        console.log('Resposta recebida:', data);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }
}

