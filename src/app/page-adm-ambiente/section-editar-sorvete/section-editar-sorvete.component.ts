import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-editar-sorvete',
  templateUrl: './section-editar-sorvete.component.html',
  styleUrls: ['./section-editar-sorvete.component.css']
})
export class SectionEditarSorveteComponent {
  id = new FormControl();
  unitPrice = new FormControl();

  constructor(private http: HttpClient) {}

  aditaProduto(){

  }
}
