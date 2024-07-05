import { Component } from '@angular/core'

@Component({
    selector: 'top-navbar-search',
    standalone: true,
    template: `
        <div class="search flex items-center px-3 py-2 border rounded-[50px] gap-4 text-sm">

            <div class="search__location px-2 border-r">
                <button class="font-medium"> N'importe où </button>
            </div>

            <div class="search__dates px-2 border-r ">
                <button class="font-medium"> Une semaine </button>
            </div>

            <div class="search__travellers px-1 ">
                <button class="text-neutral-500	"> Ajouter des voyageurs </button>
            </div>

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
