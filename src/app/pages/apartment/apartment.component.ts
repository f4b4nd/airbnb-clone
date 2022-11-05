import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

@Component({
    templateUrl: './apartment.component.html'
})

export class ApartmentComponent {

    public apartmentID!: number
    public apartment!: any
    private subscription!: Subscription
    private _jsonURL = './assets/apartments-data-mock-50-rows.json'

    constructor(private route: ActivatedRoute, private http: HttpClient) {

        this.getApartment().subscribe((data: any[]) => {
            this.apartment = data.find(item => `${item.id}` === `${this.apartmentID}`)
            console.log(this.apartment)
        })

    }

    public getApartment(): Observable<any> {
        return this.http.get(this._jsonURL)
    }

    ngOnInit() {

        this.subscription = this.route.params.subscribe(params => {
            this.apartmentID = params['id']
            console.log(this.apartmentID, params)

        })

    }
      
    ngOnDestroy() {
        if (this.subscription)  this.subscription.unsubscribe()
    }

}