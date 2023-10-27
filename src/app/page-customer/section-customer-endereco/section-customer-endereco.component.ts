import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-section-customer-endereco',
  templateUrl: './section-customer-endereco.component.html',
  styleUrls: ['./section-customer-endereco.component.css']
})
export class SectionCustomerEnderecoComponent implements OnInit {
  cepControl = new FormControl();
  ruaControl = new FormControl();
  numeroCasa = new FormControl();
  bairroControl = new FormControl();
  cidadeControl = new FormControl();
  private userData: any;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  buscarEnderecoPorCep() {
    const cep = this.cepControl.value;
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      const requestBody = { cep: cepLimpo };
      console.log('Requisição enviada com o corpo:', requestBody);

      this.http.post('http://localhost:8080/endereco/consulta', requestBody).subscribe(
        (data: any) => {
          console.log('Resposta recebida:', data);
          this.ruaControl.setValue(data.logradouro);
          this.bairroControl.setValue(data.bairro);
          this.cidadeControl.setValue(data.localidade);
        },
        (error) => {
          console.error('Ocorreu um erro:', error);

        }
      );
    }
  }

  ngOnInit() {
    const userState = this.localStorage.get('userData');
    if (userState) {
      console.log(userState);
      this.userData = userState;
    }
  }

  addEndereco() {
    const requestBody = {
      cep: this.cepControl.value,
      logradouro: this.ruaControl.value,
      bairro: this.bairroControl.value,
      localidade: this.cidadeControl.value,
      numeroCasa: this.numeroCasa.value,
      customerId: this.userData.id,
    }
    this.http.post('http://localhost:8080/endereco/new', requestBody).subscribe(
        (data: any) => {
          console.log('Resposta recebida:');
          alert('Endereço adicionado com sucesso!');
        },
        (error) => {
          console.error('Ocorreu um erro:', error);

        }
      );
  }
}
