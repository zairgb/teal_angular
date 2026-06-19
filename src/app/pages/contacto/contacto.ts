import { Component } from '@angular/core';
import { Header } from '../../Components/header/header';
import { Main } from '../../Components/main/main';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-contacto',
  imports: [Header, Main, Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {}
