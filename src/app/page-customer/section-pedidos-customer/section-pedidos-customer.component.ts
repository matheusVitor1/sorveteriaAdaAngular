import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from 'src/app/page-adm-ambiente/menu-admin/menu-admin.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-pedidos-customer',
  templateUrl: './section-pedidos-customer.component.html',
  styleUrls: ['./section-pedidos-customer.component.css']
})
export class SectionPedidosCustomerComponent implements OnInit {
  menuItems: any[] = [];
  pedido: any[] = [];
  enderecos: any[] = [];
  private userData: any;
  totalPrice: number = 0;
  selectedAddress: any;

  constructor(private MenuService: MenuAdminService, private localStorage: LocalStorageService, private http: HttpClient) {}

  ngOnInit() {
    this.MenuService.getAllItems().subscribe(data => {
      this.menuItems = data;
      const userState = this.localStorage.get('userData');
      if (userState) {
        console.log(userState);
        this.userData = userState;
        this.getAllAddresses();
      }
    });
  }

  calcularTotal() {
    this.totalPrice = this.pedido.reduce((total, item) => total + item.unitPrice, 0);
  }

  adicionarAoPedido(item: any) {
    this.pedido.push(item);
    this.calcularTotal();
  }

  removerDoPedido(item: any) {
    const index = this.pedido.indexOf(item);
    if (index > -1) {
      this.pedido.splice(index, 1);
    }
    this.calcularTotal();
  }

  getAllAddresses() {
    const customerId = this.userData.id;
    console.log('CustomerId:', customerId);

    this.http.get(`http://localhost:8080/endereco/getall/${customerId}`).subscribe(
      (data: any) => {
        console.log('Resposta recebida:', data);
        this.enderecos = data;
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }

  getEnderecoOption(endereco: any): string {
    return `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade}, ${endereco.numeroCasa}`;
  }


  fazerPedido() {
    const items = this.pedido.map((item) => {
      return {
        productId: item.id,
        quantity: 1,
        price: item.unitPrice
      };
    });

    const pedidoRequestBody = {
      customerId: this.userData.id,
      totalPrice: this.totalPrice,
      endereco: this.selectedAddress,
      items: items
    };

    this.http.post('http://localhost:8080/pedidos', pedidoRequestBody).subscribe(
      (data: any) => {
        console.log('Pedido feito com sucesso:', data);
        alert('Pedido adicionado com sucesso!');
      },
      (error) => {
        console.error('Ocorreu um erro ao fazer o pedido:', error);
      }
    );
  }
}
