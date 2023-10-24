import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  quantidadeCamposSabor: number = 1;

  removerSabor() {
    this.quantidadeCamposSabor--;
  }
  adicionarCampoSabor() {
    this.quantidadeCamposSabor++;
  }


}
