import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'filter-modal-button',
    standalone: true,
    template: `
        <button class="filter-modal-button w-[max-content] px-4 py-4 border rounded-[20px]">

            <div class="flex items-center gap-2"> 
                <img 
                    class="h-[14px] w-[14px]"
                    src="./assets/icons/filter.svg" 
                    alt="filter" 
                />
                <span class="text text-sm"> Filtres </span>
            </div>

        </button>
    `,
})

export class FilterModalButtonComponent implements OnInit {

    ngOnInit() {}
      
}
