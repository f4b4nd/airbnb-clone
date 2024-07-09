import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription, combineLatest, map } from 'rxjs'

import { TopNavbarComponent } from '../../components/top-navbar'
import { BookingFormComponent, GalleryFullComponent, GalleryPreviewComponent } from '../../components'
import { AsyncPipe, NgIf } from '@angular/common'
import { ToLocaleDatePipe } from '../../pipes'
import { ApartmentsGateway } from '../../services/apartments.gateway'

@Component({
    templateUrl: './apartment.component.html',
    standalone: true,
    imports: [
        TopNavbarComponent,
        BookingFormComponent,
        GalleryPreviewComponent, GalleryFullComponent,
        NgIf,
        ToLocaleDatePipe,
        AsyncPipe,
    ],
})

export class ApartmentComponent {

    apartment$: Observable<TApartment|undefined> = this.fetchApartment()
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

    constructor(private route: ActivatedRoute, private apartmentGateway: ApartmentsGateway) {}

    
    private fetchApartment () {

        const apartments$: Observable<TApartment[]> = this.apartmentGateway.fetchApartments()

        const apartmentID$: Observable<string> = this.route.params.pipe(map(params => params['id']))

        return combineLatest([apartments$, apartmentID$])
            .pipe(
                map(([apartments, apartmentID]) => apartments.find(apartment => `${apartment.id}` === apartmentID)),
        )
    }



}