import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../page-customer/customer.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {

  emailControl = new FormControl();
  passwordControl = new FormControl();

  constructor(private http: HttpClient, private userService: CustomerService, private router: Router, private localStorage: LocalStorageService) { }
  private firstLoad = false;

  realizarLogin() {
    const params = new HttpParams()
      .set('email', this.emailControl.value)
      .set('password', this.passwordControl.value);

      this.http.post<any>('http://localhost:8080/sorvetada/api/customer/authenticate', null, { params }).subscribe((response) => {
        const userState = { id: response.id, name: response.name, cpf: response.cpf, email: response.email, addressList: response.addressList };
        console.log(response);

        this.localStorage.set('userData', userState);

        this.router.navigate(['/pagina-do-cliente']);

        }, (error) => {
          alert('Usuário ou senha incorretos');
        }

      )

  }
}
