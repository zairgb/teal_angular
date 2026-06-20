import { Component } from '@angular/core';

import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Header,  Footer, ],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {}
