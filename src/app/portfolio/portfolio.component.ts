import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent 
{
  currentPathImage!:string
  imagePath:string[]=["../../assets/images/poert1.png","../../assets/images/port2.png","../../assets/images/port3.png","../../assets/images/poert1.png","../../assets/images/port2.png","../../assets/images/port3.png"];

  clickImage(path:string)
  {
    this.currentPathImage = path
  }
}
