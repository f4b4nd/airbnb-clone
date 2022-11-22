import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs'

import { environment } from '../../../environments/environment'

@Component({
    templateUrl: './apartment.component.html',
})

export class ApartmentComponent {

    public apartmentID!: string
    public apartment!: TApartment | undefined
    private subscription!: Subscription
    public today: Date = new Date()

    private _apiURL = environment.apiUrl
    public displayFullGallery: boolean = false

    @Input() setDisplayFullGallery () {
        this.displayFullGallery = true
    }

    @Input() unsetDisplayFullGallery () {
        this.displayFullGallery = false
    }

    public getApartment() {
        return this.http.get<APIResponse>(this._apiURL)
    }

    public addDays(date: Date, days: number) {
        const result = new Date()
        result.setDate(date.getDate() + days)
        return result
    }

    constructor(private route: ActivatedRoute, private http: HttpClient) {

        this.getApartment().subscribe(data => {
            this.apartment = data.apartments.find(item => `${item.id}` === this.apartmentID)
        })

    }

    ngOnInit() {

        this.subscription = this.route.params.subscribe(params => {
            this.apartmentID = params['id']
        })

    }
      
    ngOnDestroy() {
        if (this.subscription)  this.subscription.unsubscribe()
    }

}