import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-editar-foto',
  templateUrl: './section-editar-foto.component.html',
  styleUrls: ['./section-editar-foto.component.css']
})
export class SectionEditarFotoComponent {
  id = new FormControl();
  urlPhoto = new FormControl();

  constructor(private http: HttpClient) {}


  editFoto(){
    const requestBody = {
      id: this.id.value,
      urlPhoto: this.urlPhoto.value};

    console.log('Requisição enviada com o corpo:', requestBody);
    this.http.put('http://localhost:8080/sorvetada/api/icecream/updateUrlPhoto', requestBody).subscribe(
      (data: any) => {
        console.log('Resposta recebida:', data);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }

}
