import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [

    {
      logo: 'images/client3.png',
      name: 'Anu Koteshwara',
      company: 'Slide 365',
      review:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.'
    },

    {
      logo: 'images/client11.png',
      name: 'Shikhar Mithal',
      company: 'Mithal Industries',
      review:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.'
    },

    {
      logo: 'images/client2.png',
      name: 'Matt Reeder',
      company: 'Slide 365',
      review:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.'
    }

  ];

}
