import { Component } from '@angular/core'

@Component({
    selector: 'top-navbar-profile',
    standalone: true,
    template: `
        <div class="profile ">

            <button class="profile__button flex justify-evenly items-center border rounded-[30px] gap-3 px-3 py-1">

                <div class="burger-button"> 
                    <div class="space-y-[0.1em] w-4">
                        <div class="w-full h-0.5 bg-gray-500"></div>
                        <div class="w-full h-0.5 bg-gray-500"></div>
                        <div class="w-full h-0.5 bg-gray-500"></div>
                    </div>
                </div>

                <div class="profile__logo">
                    <div class="img-container"> 
                        <img class="w-[30px]" src={{profileLogoSrc}} alt="profile" />
                    </div>

                </div>

            </button>
        </div>
    `,
})

export class TopNavbarProfileComponent {
    profileLogoSrc = "./assets/icons/profile.svg"
}
