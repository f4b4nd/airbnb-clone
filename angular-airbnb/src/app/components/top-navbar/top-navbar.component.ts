import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'

import { TopNavbarProfileComponent } from './top-navbar.profile.component'
import { NavbarSearchFormComponent } from '../forms/navbar-search-form.component'


@Component({
    selector: 'top-navbar',
    standalone: true,
    imports: [
        TopNavbarProfileComponent, NavbarSearchFormComponent,
        NgClass, RouterLink,
    ],
    template: `
        <nav class="top-navbar">

            <div 
                class="container flex justify-between items-center py-[1em]"
                [ngClass]="containerWidth"
            >
                
                <div class="logo">
                    <a class="nav-item nav-link" routerLink="/"> 
                        <div class="logo-container h-[35px]">
                            <img class="h-full w-full object-fit" src={{logoSrc}} alt="airbnb-logo"/>
                        </div>
                    </a>
                </div>

                <navbar-search-form />

                <div class="col flex items-center gap-4">

                    <div class="host"> 
                        <a routerLink="#"> 
                            <button class="text-sm"> Devenez hôte </button>
                        </a>
                    </div>

                    <div class="language">
                        <button class="flex items-center"> 
                            <img class="w-[15px]"src={{planetImgSrc}} alt="language"/>
                        </button>
                    </div>

                    <top-navbar-profile />

                </div>

            </div>

            <div class="border-b-[1px] border-gray-200"> </div>

        </nav>
    `,
})

export class TopNavbarComponent {

    logoSrc = "./assets/logos/airbnb_logo.png"

    planetImgSrc = "./assets/icons/planet.svg"

    @Input() containerWidth = ""
    
}
