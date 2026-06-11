import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [

    {
      id: '01',
      title: 'Digital Transformation',
      icon: 'images/service1.png',
      points: [
        'Ecommerce Audit & Strategy',
        'Scalability Roadmap',
        'Ecommerce Platform Selection',
        'Streamlined Tech Stack'
      ]
    },

    {
      id: '02',
      title: 'Store Design & Development',
      icon: 'images/service2.png',
      points: [
        'Ecommerce Store UI/UX',
        'Theme-Based Development',
        'Custom Shopify Development',
        'Custom BigCommerce Development'
      ]
    },

    {
      id: '03',
      title: 'Platform Migration',
      icon: 'images/service3.png',
      points: [
        'Magento to Shopify',
        'Shopify to BigCommerce',
        'BigCommerce to Shopify',
        'Shopify to Magento'
      ]
    },

    {
      id: '04',
      title: 'Custom Tech Stack Development',
      icon: 'images/service4.png',
      points: [
        'Checkout Customisation',
        'Custom Tech Stack',
        'Operations Automation',
        'Cloud Migration'
      ]
    },

    {
      id: '05',
      title: 'Third Party Integration',
      icon: 'images/service5.png',
      points: [
        'Payment Gateways',
        'Shipping Solutions',
        'Customer Support Tools'
      ]
    },

    {
      id: '06',
      title: 'App Development',
      icon: 'images/service6.png',
      points: [
        'iOS App Development',
        'Android App Development',
        'Cross Platform App Development'
      ]
    }

  ];

}