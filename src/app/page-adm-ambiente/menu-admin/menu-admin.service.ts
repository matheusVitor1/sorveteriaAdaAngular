import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {

  constructor(private http: HttpClient) {}

  getAllItems(): Observable <any>{
    const url = 'http://localhost:8080/sorvetada/api/icecream/all';
    return this.http.get(url);
  }
}
