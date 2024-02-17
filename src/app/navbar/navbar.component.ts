import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  scroll:boolean = false;
  @HostListener('window:scroll', [])
  Scroll()
  {
    this.scroll = window.scrollY > 20; 
  }
}
