import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  nomeCliente: string = '';
  emailCliente: string = '';
  telefoneCliente: string = '';
  sabores: { sabor: string, quantidade: number }[] = [];
  valorTotal: number = 0;
}
