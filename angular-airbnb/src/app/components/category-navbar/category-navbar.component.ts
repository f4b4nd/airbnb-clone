import { Component, EventEmitter, Input, OnInit, Output, Signal, computed } from '@angular/core'
import { Observable, first, map, take } from 'rxjs'
import { AsyncPipe, NgFor } from '@angular/common'

import { CapitalizePipe } from '../../pipes'
import { CategoriesGateway } from '../../services/categories.gateway'
import { EngineService } from '../../../state/engine.service'
import { NgModel } from '@angular/forms'

@Component({
    selector: 'category-navbar',
    standalone: true,
    imports: [CapitalizePipe, AsyncPipe],
    template: `

        <div class="category-navbar hidden-scrollbar overflow-x-scroll bg-white py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                @for (category of categories$ | async; track category.id) {
           
                     <label class="category-nav-item">
                        {{this.engineService.category$$()}}

                        <input 
                            type="checkbox"
                            [checked]="this.engineService.category$$() === category.id"
                            [disabled]="this.engineService.category$$() === category.id"
                            (change)="this.onChange(category.id)"
                        />

                        <img 
                            class="w-[24px] h-[24px] contrast-[0.3]" 
                            [src]="'./assets/icons/category/' + category.file" 
                        />

                        <div class="w-[max-content] text-gray-500 text-[12px]">
                            {{category.name | capitalize }}
                        </div>

                    </label>


                }
    
            </div>

        </div>
    `,
})

export class CategoryNavbarComponent implements OnInit {

    categories$?: Observable<TCategory[]>
    
    constructor(private categoriesGateway: CategoriesGateway, public engineService: EngineService) {}

    ngOnInit() {

        this.categories$ = this.categoriesGateway.fetchCategories()

        this.categories$
            .pipe(
                take(1),
            )
            .subscribe(categories => {
                if (categories.length > 0) {
                    this.engineService.setCategory(categories[0].id)
                }
            })
    
    }
    
    onChange (categoryID: number) {

        this.engineService.setCategory(categoryID)

    }

}