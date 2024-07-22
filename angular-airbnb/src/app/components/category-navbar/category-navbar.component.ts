import { Component, OnInit, computed } from '@angular/core'
import { Observable, Subject, take, takeUntil } from 'rxjs'
import { AsyncPipe } from '@angular/common'

import { HouseCategoriesGateway } from '../../services/houseCategories.gateway'
import { EngineService } from '../../../state/engine.service'

import { CategoryNavbarRadioComponent } from './category-navbar.radio.component'

@Component({
    selector: 'category-navbar',
    standalone: true,
    imports: [CategoryNavbarRadioComponent, AsyncPipe],
    template: `

        <div class="category-navbar hidden-scrollbar overflow-x-scroll bg-white py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                @for (houseCategory of houseCategories$ | async; track houseCategory.id) {

                    <category-navbar-radio 
                        [isActive$$]="this.isActiveItem$$(houseCategory.id)"
                        [houseCategory]="houseCategory"
                        (onChangeEmitter)="setHouseCategory($event)"
                    />

                }
    
            </div>

        </div>
    `,
})

export class CategoryNavbarComponent implements OnInit {

    houseCategories$?: Observable<HouseCategory[]>

    private unsubscribe$ = new Subject<boolean>()
    
    constructor(private houseCategoriesGateway: HouseCategoriesGateway, public engineService: EngineService) {}

    isActiveItem$$ (houseCategoryID: number) {
        return computed(() => this.engineService.houseCategory$$() === houseCategoryID)
    }

    ngOnInit() {

        this.houseCategories$ = this.houseCategoriesGateway.fetchHouseCategories()

        this.houseCategories$
            .pipe(
                takeUntil(this.unsubscribe$),
            )
            .subscribe(houseCategories => {
                if (houseCategories.length > 0) {
                    const initialCategory = houseCategories[0]
                    this.engineService.setHouseCategory(initialCategory.id)
                }
            })
    
    }

    ngOnDestroy() {
        this.unsubscribe$.next(true)
        this.unsubscribe$.unsubscribe      
    }
    
    setHouseCategory (houseCategoryID: number) {
        this.engineService.setHouseCategory(houseCategoryID)
    }


}