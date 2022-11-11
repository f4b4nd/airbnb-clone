import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

import { environment } from '../../../environments/environment'

@Component({
    templateUrl: './apartment.component.html',
})

export class ApartmentComponent {

    public apartmentID!: string
    public apartment!: any
    private subscription!: Subscription

    private _jsonURL = `${environment.apiUrl}/apartments`
    public displayFullGallery: boolean = false

    @Input() setDisplayFullGallery () {
        this.displayFullGallery = true
    }

    @Input() unsetDisplayFullGallery () {
        this.displayFullGallery = false
    }

    public getApartment(): Observable<any> {
        return this.http.get(this._jsonURL)
    }

    constructor(private route: ActivatedRoute, private http: HttpClient) {

        this.getApartment().subscribe((data: any[]) => {
            this.apartment = data.find(item => `${item.id}` === this.apartmentID)
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