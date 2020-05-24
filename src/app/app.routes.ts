import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    
    // El path vacío se redirige a home
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // Cualquier otro path se redirige a home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
