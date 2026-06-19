import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contacto } from './pages/contacto/contacto';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contacto', component: Contacto },
    { path: 'productos', component: Productos },

    { path: '**', redirectTo: '' }
];
