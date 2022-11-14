import { Component, Input } from '@angular/core'

@Component({
    selector: 'top-navbar',
    template: `
        <nav class="top-navbar sticky top-0 z-[2] bg-white ">

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

                <top-navbar-search> </top-navbar-search>

                <div class="profile"></div>

            </div>

            <div class="border-b-[1px] border-gray-200"> </div>

        </nav>
    `,
})

export class TopNavbarComponent {
    logoSrc = "/assets/logos/airbnb_logo.png"
    @Input() containerWidth = ""
}
