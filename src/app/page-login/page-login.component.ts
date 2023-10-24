import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {

  constructor(private http: HttpClient, private router: Router) {

  }
  private firstLoad = true; // Adicione uma variável de controle

  realizarLogin() {
    const email = 'example@example.com'; // Substitua pelo valor real do email que você deseja usar para fazer o login.

    this.http.post<any>('http://localhost:8080/api/login', { email: email }).subscribe((response) => {
      // Processar a resposta do backend aqui.
      // A resposta contém os dados de endereço que seu backend retornou.
      console.log('Rua:', response.rua); // Substitua 'rua' pelo nome real da propriedade em sua resposta.
    });
  }






}
