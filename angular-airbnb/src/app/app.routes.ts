import { Routes, RouterModule } from '@angular/router'



export const routes: Routes = [ 

    { 
        path: '', 
        loadComponent: () => import('./pages').then(module => module.HomeComponent),
    },
    { 
        path: 'apartment/:id',
        loadComponent: () => import('./pages').then(module => module.ApartmentComponent),
    },
    { 
        path: '**', 
        redirectTo: '' 
    },

]

export const appRoutingModule = RouterModule.forRoot(routes)