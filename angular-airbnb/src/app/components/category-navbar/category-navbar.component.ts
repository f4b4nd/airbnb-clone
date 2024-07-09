import { Component } from '@angular/core'

import { CapitalizePipe } from '../../pipes'
import { AsyncPipe, NgFor } from '@angular/common'
import { CategoriesGateway } from '../../services/categories.gateway'
import { Observable } from 'rxjs'

@Component({
    selector: 'category-navbar',
    standalone: true,
    imports: [CapitalizePipe, AsyncPipe, NgFor],
    template: `
        <div class="category-navbar hidden-scrollbar overflow-x-scroll bg-white py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                <div
                    *ngFor="let category of categories$ | async" 
                    class="category-nav-item"
                >

                    <button class="item__wrapper flex flex-col items-center gap-y-2">

                        <img 
                            class="w-[24px] h-[24px] contrast-[0.3]" 
                            [src]="'./assets/icons/category/' + category.file" 
                        />

                        <div class=" w-[max-content] text-gray-500 text-[12px]"> {{category.label | capitalize }} </div>
                    </button>

                </div>

            </div>

        </div>
    `,
})

export class CategoryNavbarComponent {

    categories$: Observable<TCategory[]> = this.categoriesGateway.fetchCategories()

    constructor(private categoriesGateway: CategoriesGateway) {}

}
