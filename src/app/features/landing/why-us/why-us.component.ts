import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  features = [

    {
      image: 'images/responsive.png',
      title: 'Responsive Web Design',
      description: 'All of our sites are built with a mobile first approach. We make sure your site will be viewable by all.'
    },

    {
      image: 'images/consultive.png',
      title: 'Consultive Approach',
      description: 'We work with our clients to truly understand their business and their sales goals to build a solution perfect for them.'
    },

    {
      image: 'images/expert.png',
      title: 'Expert Advice',
      description: 'With more than 20 years in web development and e-commerce consulting there is nothing we have not seen.'
    },

    {
      image: 'images/conversion.png',
      title: 'Built For Conversion',
      description: 'Our focus is driving more sales and leads. We build your site to optimize these conversions.'
    },

    {
      image: 'images/marketing.png',
      title: 'Marketing Strategies',
      description: 'We will help you develop the perfect strategy to get more clients, and will setup all the tools you need.'
    },

    {
      image: 'images/analysis.png',
      title: 'Competitive Analysis',
      description: 'We look at what the leaders in your industry are doing so that you are sure to compete with the best.'
    }

  ];


}
