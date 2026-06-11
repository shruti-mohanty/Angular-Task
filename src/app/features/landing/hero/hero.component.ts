import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroData = {
    rating: '4.8 (80+ Reviews)',

    titleLine1: 'Crafting exceptional',

    titleLine2: 'ecommerce',

    highlight: 'experiences',

    subtitle:
      'Partner with our real people agency for shopify and bigcommerce solution'
  };


}
