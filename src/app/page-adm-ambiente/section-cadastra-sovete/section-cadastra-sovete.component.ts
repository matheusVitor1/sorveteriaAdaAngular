import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-section-cadastra-sovete',
  templateUrl: './section-cadastra-sovete.component.html',
  styleUrls: ['./section-cadastra-sovete.component.css']
})
export class SectionCadastraSoveteComponent {
  flavor = new FormControl();
  unitPrice = new FormControl();
  avaiableUnits = new FormControl();
  urlPhoto = new FormControl();

  constructor(private http: HttpClient) {}

  addProduto(){

  }
}
