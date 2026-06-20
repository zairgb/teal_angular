import { Component } from '@angular/core';

import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-productos',
  imports: [Header, Footer],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {}
