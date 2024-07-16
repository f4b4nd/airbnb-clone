import { Routes, RouterModule } from '@angular/router'



export const routes: Routes = [ 

    { 
        path: '', 
        loadComponent: () => import('./pages').then(module => module.HomeComponent),
    },
    { 
        path: 'house/:id',
        loadComponent: () => import('./pages').then(module => module.HouseComponent),
    },
    { 
        path: '**', 
        redirectTo: '' 
    },

]

export const appRoutingModule = RouterModule.forRoot(routes)