import { Component } from '@angular/core'
import { LocationDialogButtonComponent, GuestsDialogButtonComponent } from '../../components'

@Component({
    selector: 'top-navbar-search',
    standalone: true,
    imports: [LocationDialogButtonComponent, GuestsDialogButtonComponent],
    template: `
        <div class="search flex items-center px-3 py-2 border rounded-[50px] gap-4 text-sm">

            <location-dialog-button />

            <div class="search__dates px-2 border-r ">
                <button class="font-medium"> Une semaine </button>
            </div>

            <guests-dialog-button />

            <div class="search__submit">
                <button 
                    class="image-container h-[32px] w-[32px] bg-crimson flex justify-center items-center rounded-full"> 
                    <img 
                        src={{submitLogoSrc}} 
                        alt="submit" 
                        class="h-[12px] w-[12px]" 
                    />
                    
                </button>
            </div>

        </div>
    `,
})

export class TopNavbarSearchComponent {

    submitLogoSrc = "./assets/icons/loupe.svg"

}
