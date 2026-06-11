import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
  activeTab = 0;

  phases = [

  {
    title: 'Discovery Phase',
    description:
      'A discovery phase is necessary to align business goals with an engineering team, avoid costly mistakes, and plan a smooth start of actual product development. Our experienced business analysts and software architects map user journeys, conduct technical analyses, and define requirements and project scope for precise cost estimation. After the discovery phase, you will receive a team composition plan, vision and scope document, technical and cost proposal with estimates, UX/UI prototype, and project plan based on your business objectives.'
  },

  {
    title: 'Strategy Phase',
    description:
      'We create a clear business strategy, define project goals, identify opportunities, and establish a roadmap to ensure the successful execution of your ecommerce project.'
  },

  {
    title: 'Design Phase',
    description:
      'Our UI/UX designers create intuitive user experiences, wireframes, prototypes, and visually appealing designs that align with your brand identity and customer expectations.'
  },

  {
    title: 'Development Phase',
    description:
      'Our developers build scalable, secure, and high-performance ecommerce solutions using modern technologies and industry best practices.'
  },

  {
    title: 'Quality Assurance Phase',
    description:
      'We perform thorough testing including functionality, usability, performance, and security testing to ensure a flawless user experience before launch.'
  },

  {
    title: 'Launch & Post-Launch Support Phase',
    description:
      'After successful deployment, we provide ongoing maintenance, monitoring, optimization, and technical support to ensure continuous business growth.'
  }

];

  selectTab(index: number) {

    this.activeTab = index;

  }


}
