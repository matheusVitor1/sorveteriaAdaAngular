import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'app-component-wish-list',
  templateUrl: './component-wish-list.component.html',
  styleUrls: ['./component-wish-list.component.css']
})
export class ComponentWishListComponent {
  quantidadeCamposSabor: number = 1;
  valorTotal: number = 0;
  saborSelecionado: string = 'Chocolate';
  quantidadeSelecionada: number = 1;
  nomeCliente: string = '';
  emailCliente: string = '';
  telefoneCliente: string = '';

  sabores: { sabor: string, quantidade: number }[] = [];
  saborValorMap: { [sabor: string]: number } = {
    Chocolate: 12,
    Morango: 15,
    Creme: 12,
  };

  constructor(private router: Router, private cartService: WishListService) {}

  removerSabor() {
    if (this.sabores.length > 0) {
      this.sabores.pop();
      this.atualizarValorTotal();
    }
  }

  adicionarCampoSabor() {
    this.sabores.push({ sabor: this.saborSelecionado, quantidade: this.quantidadeSelecionada });
    this.atualizarValorTotal();
  }

  atualizarValorTotal() {
    this.valorTotal = this.sabores.reduce((total, sabor) => {
      return total + sabor.quantidade * this.saborValorMap[sabor.sabor];
    }, 0);
  }

  navegarParaPagamento() {
    this.cartService.nomeCliente = this.nomeCliente;
    this.cartService.emailCliente = this.emailCliente;
    this.cartService.telefoneCliente = this.telefoneCliente;
    this.cartService.sabores = this.sabores;
    this.cartService.valorTotal = this.valorTotal;
    this.router.navigate(['/carrinho']);
  }

}
