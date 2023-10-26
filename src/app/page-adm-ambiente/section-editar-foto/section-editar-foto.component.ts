import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-editar-foto',
  templateUrl: './section-editar-foto.component.html',
  styleUrls: ['./section-editar-foto.component.css']
})
export class SectionEditarFotoComponent {
  id = new FormControl();
  urlPhoto = new FormControl();

  constructor(private http: HttpClient) {}

  addFoto(){

  }

}
