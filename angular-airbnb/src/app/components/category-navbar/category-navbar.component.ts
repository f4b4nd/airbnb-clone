import { Component, OnInit, computed } from '@angular/core'
import { Observable, take } from 'rxjs'
import { AsyncPipe } from '@angular/common'

import { HouseCategoriesGateway } from '../../services/houseCategories.gateway'
import { EngineService } from '../../../state/engine.service'

import { CategoryNavbarCheckboxComponent } from './category-navbar.checkbox.component'

@Component({
    selector: 'category-navbar',
    standalone: true,
    imports: [CategoryNavbarCheckboxComponent, AsyncPipe],
    template: `

        <div class="category-navbar hidden-scrollbar overflow-x-scroll bg-white py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                @for (houseCategory of houseCategories$ | async; track houseCategory.id) {

                    <category-navbar-checkbox 
                        [isActive$$]="this.isActiveItem$$(houseCategory.id)"
                        [houseCategory]="houseCategory"
                        (onChangeEmitter)="this.onChange(houseCategory.id)"
                    />

                }
    
            </div>

        </div>
    `,
})

export class CategoryNavbarComponent implements OnInit {

    houseCategories$?: Observable<HouseCategory[]>

    
    constructor(private houseCategoriesGateway: HouseCategoriesGateway, public engineService: EngineService) {}

    isActiveItem$$ (houseCategoryID: number) {
        return computed(() => this.engineService.houseCategory$$() === houseCategoryID)
    }

    ngOnInit() {

        this.houseCategories$ = this.houseCategoriesGateway.fetchHouseCategories()

        this.houseCategories$
            .pipe(
                take(1),
            )
            .subscribe(houseCategories => {
                if (houseCategories.length > 0) {
                    const initialCategory = houseCategories[0]
                    this.engineService.setHouseCategory(initialCategory.id)
                }
            })
    
    }
    
    onChange (houseCategoryID: number) {

        this.engineService.setHouseCategory(houseCategoryID)

    }

}