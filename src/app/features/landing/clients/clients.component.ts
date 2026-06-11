import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients = [

    'images/client1.png',
    'images/client2.png',
    'images/client3.png',
    'images/client4.png',
    'images/client5.png',

    'images/client6.png',
    'images/client7.png',
    'images/client8.png',
    'images/client9.png',
    'images/client10.png'

  ];
}
