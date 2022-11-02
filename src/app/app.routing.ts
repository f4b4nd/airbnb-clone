import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { ApartmentComponent } from './pages/apartment/apartment.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apartment', component: ApartmentComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes)