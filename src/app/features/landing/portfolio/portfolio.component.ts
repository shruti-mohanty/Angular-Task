import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
   project = {

  name: '2ndamendmentguns',

  category: 'Store Design & Development',

  sales: '80%',

  conversion: '120%',

  orderValue: '140%',

  laptopImage: 'images/portfolio-laptop.png',

  mobileImage: 'images/portfolio-mobile.png'
};

}
