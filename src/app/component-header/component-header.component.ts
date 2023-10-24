import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activateMenuItem(event.url);
      }
    });
  }

  activateMenuItem(url: string) {
    const menuItems = document.querySelectorAll('#navbar a');

    menuItems.forEach((menuItem) => {
      const link = menuItem.getAttribute('routerLink');
      if (link && url.includes(link)) {
        menuItem.classList.add('active');
      } else {
        menuItem.classList.remove('active');
      }
    });
  }
}
