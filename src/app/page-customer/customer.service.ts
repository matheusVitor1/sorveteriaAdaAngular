import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private userData: any;

  setUserData(data:any){
    this.userData = data;
  }

  getUserData(): any{
    return this.userData;
  }
}
