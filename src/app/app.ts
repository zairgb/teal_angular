import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contacto } from "./pages/contacto/contacto";
import { Productos } from "./pages/productos/productos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_frontend');
}
