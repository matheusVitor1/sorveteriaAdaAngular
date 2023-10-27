import { LocalStorageService } from './../../local-storage.service';
import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-section-customer-header',
  templateUrl: './section-customer-header.component.html',
  styleUrls: ['./section-customer-header.component.css']
})
export class SectionCustomerHeaderComponent {
  constructor(private router: Router, private localStorage: LocalStorageService){

  }

  logoutHeader(){
    this.router.navigate(['/']);

  }
}
