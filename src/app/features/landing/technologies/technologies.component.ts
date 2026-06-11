import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
 technologies = [

  {
    title: 'Shopify',
    logo: 'images/shopify.png',
    description:
      'Over 4.4 million businesses are thriving on shopify. Let’s put your business right at the top with our powerful shopify stores and mobile Apps'
  },

  {
    title: 'Magento',
    logo: 'images/magneto.png',
    description:
      'Big brand are thriving with magento stores are you missing out? We can build a feature-rich Magento 2 store for you the lead and scale online!'
  },

  {
    title: 'BigCommerce',
    logo: 'images/bigcommerce.png',
    description:
      'Sell Smarter, not harder with Bigcommerce! We build easy-to-use stores that grab more attention and crush the competition.'
  },

  {
    title: 'WooCommerce',
    logo: 'images/woocommerce.png',
    description:
      'Over 4.4 million businesses are thriving on shopify. Let’s put your business right at the top with our powerful shopify stores and mobile Apps'
  },

  {
    title: 'Custom Commerce',
    logo: '',
    description:
      'Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.'
  },

  {
    title: 'Headless',
    logo: '',
    description:
      'Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.'
  }

];


}
