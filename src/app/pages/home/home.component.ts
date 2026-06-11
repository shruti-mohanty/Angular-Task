import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeroComponent } from '../../features/landing/hero/hero.component';
import { AboutComponent } from '../../features/landing/about/about.component';
import { ServicesComponent } from '../../features/landing/services/services.component';
import { PortfolioComponent } from '../../features/landing/portfolio/portfolio.component';
import { TechnologiesComponent } from '../../features/landing/technologies/technologies.component';
import { CtaBannerComponent } from '../../features/landing/cta-banner/cta-banner.component';
import { ProcessComponent } from '../../features/landing/process/process.component';
import { WhyUsComponent } from '../../features/landing/why-us/why-us.component';
import { ClientsComponent } from '../../features/landing/clients/clients.component';
import { TestimonialsComponent } from '../../features/landing/testimonials/testimonials.component';
import { ContactComponent } from '../../features/landing/contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,AboutComponent,ServicesComponent, PortfolioComponent,TechnologiesComponent,CtaBannerComponent, ProcessComponent, WhyUsComponent, ClientsComponent, TestimonialsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
