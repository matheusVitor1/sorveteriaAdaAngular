import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.css']
})
export class ComponentMenuComponent implements OnInit{
  menuItems: any[] = [];

  constructor(private http: HttpClient, private MenuService: MenuService) {}

  ngOnInit() {

    this.MenuService.getAllItems().subscribe(data =>{
      this.menuItems = data;
    });

  }


}
