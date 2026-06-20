import { Component } from '@angular/core';

import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-contacto',
  imports: [Header, Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {}
