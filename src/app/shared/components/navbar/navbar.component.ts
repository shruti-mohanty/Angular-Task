import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeLink = signal('home');

  setActive(link: string) {
    this.activeLink.set(link);
  }

 scrollTo(sectionId: string): void {

  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

}
isMenuOpen = false;

toggleMenu() {

  this.isMenuOpen = !this.isMenuOpen;

}
}
