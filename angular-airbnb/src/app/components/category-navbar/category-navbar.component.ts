import { Component, OnInit } from '@angular/core'
import { Observable, take } from 'rxjs'
import { AsyncPipe } from '@angular/common'

import { CategoriesGateway } from '../../services/categories.gateway'
import { EngineService } from '../../../state/engine.service'

import { CategoryNavbarCheckboxComponent } from './category-navbar.checkbox.component'

@Component({
    selector: 'category-navbar',
    standalone: true,
    imports: [CategoryNavbarCheckboxComponent, AsyncPipe],
    template: `

        <div class="category-navbar hidden-scrollbar overflow-x-scroll bg-white py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                @for (category of categories$ | async; track category.id) {

                    <category-navbar-checkbox 
                        [isActive]="this.engineService.category$$() === category.id"
                        [category]="category"
                        (onChangeEmitter)="this.onChange(category.id)"
                    />

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