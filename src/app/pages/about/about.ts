import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Header } from '../../Components/header/header';
import { Main } from '../../Components/main/main';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Header, Main, Footer, RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {}
