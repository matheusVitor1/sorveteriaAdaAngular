import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-endereco',
  templateUrl: './page-endereco.component.html',
  styleUrls: ['./page-endereco.component.css']
})


export class PageEnderecoComponent {

  nomeCliente: string = '';
  emailCliente: string = '';
  telefoneCliente: string = '';
  sabores: { sabor: string, quantidade: number }[]=[];
  valorTotal: number = 0;
  cep: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params['dados']) {
        const dados = JSON.parse(params['dados']);
        this.nomeCliente = dados.nomeCliente;
        this.emailCliente = dados.emailCliente;
        this.telefoneCliente = dados.telefoneCliente;
        this.sabores = dados.sabores;
        this.valorTotal = dados.valorTotal;
      }
    });


  }




}
