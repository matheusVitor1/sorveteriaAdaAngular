import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-excluir-sorvete',
  templateUrl: './section-excluir-sorvete.component.html',
  styleUrls: ['./section-excluir-sorvete.component.css']
})
export class SectionExcluirSorveteComponent {
  id = new FormControl();
  constructor(private http: HttpClient) {}

  deleteProduto(){
    
  }
}
