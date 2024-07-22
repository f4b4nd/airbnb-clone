import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { AsyncPipe, NgIf } from '@angular/common'
import { ToLocaleDatePipe } from '../../pipes'
import { HousesGateway } from '../../services/houses.gateway'

import { BookingFormComponent, GalleryFullComponent, GalleryPreviewComponent, TopNavbarComponent } from '../../components'

@Component({
    templateUrl: './house.component.html',
    standalone: true,
    imports: [
        TopNavbarComponent,
        BookingFormComponent,
        GalleryPreviewComponent, GalleryFullComponent,
        NgIf,
        MatProgressSpinnerModule,
        ToLocaleDatePipe,
        AsyncPipe,
    ],
})

export class HouseComponent {

    house$?: Observable<House|undefined>

    public today: Date = new Date()

    public displayFullGallery: boolean = false

    @Input() setDisplayFullGallery () {
        this.displayFullGallery = true
    }

    @Input() unsetDisplayFullGallery () {
        this.displayFullGallery = false
    }


    public addDays(date: Date, days: number) {
        const result = new Date()
        result.setDate(date.getDate() + days)
        return result
    }

    constructor(private route: ActivatedRoute, private houseGateway: HousesGateway) {}

    
    private fetchHouse () {

        const houseID$: Observable<string> = this.route.params
            .pipe(
                map(params => params['id']),
            )

        return this.houseGateway.fetchHouseByID(houseID$)

    }

    ngOnInit(): void {
        
        this.house$ = this.fetchHouse()
        
    }


}