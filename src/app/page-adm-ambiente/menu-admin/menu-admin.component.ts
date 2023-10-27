import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuAdminService } from './menu-admin.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private http: HttpClient, private MenuService: MenuAdminService) {}

  ngOnInit() {

    this.MenuService.getAllItems().subscribe(data =>{
      this.menuItems = data;
    });

  }
}
