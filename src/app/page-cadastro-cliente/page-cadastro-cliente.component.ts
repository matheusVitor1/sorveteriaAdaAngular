import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-cadastro-cliente',
  templateUrl: './page-cadastro-cliente.component.html',
  styleUrls: ['./page-cadastro-cliente.component.css']
})
export class PageCadastroClienteComponent {
  tipoDocumento: string = 'cpf';
  documentoPattern: string = '';
  cepControl = new FormControl();
  ruaControl = new FormControl();
  bairroControl = new FormControl();
  cidadeControl = new FormControl();

  updatePattern() {
    if (this.tipoDocumento === 'cpf') {
      // Defina a máscara de CPF
      // Exemplo: '999.999.999-99'
      this.documentoPattern = '\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}';
    } else if (this.tipoDocumento === 'cnpj') {
      // Defina a máscara de CNPJ
      // Exemplo: '99.999.999/9999-99'
      this.documentoPattern = '\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}';
    } else {
      this.documentoPattern = ''; // Selecione outra opção
    }
  }

  constructor(private http: HttpClient) {}

  buscarEnderecoPorCep() {
    const cep = this.cepControl.value;
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      const requestBody = { cep: cepLimpo };
      console.log('Requisição enviada com o corpo:', requestBody); // Adicione esta linha para verificar o corpo da requisição
      this.http.post('http://localhost:8080/endereco/consulta', requestBody).subscribe((data: any) => {
        console.log('Resposta recebida:', data); // Adicione esta linha para verificar a resposta do servidor
        this.ruaControl.setValue(data.logradouro);
        this.bairroControl.setValue(data.bairro);
        this.cidadeControl.setValue(data.localidade);
      });
    }
  }






}
