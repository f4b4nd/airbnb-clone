import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../../environments/environment'
import { CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent, CategoryNavbarComponent, FilterModalButtonComponent } from '../../components'
import { ToLocaleCurrencyPipe, ToStringPipe } from '../../pipes'
import { RouterLink } from '@angular/router'
import { TopNavbarComponent } from '../../components/top-navbar'
import { NgFor } from '@angular/common'

@Component({
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent,
        FilterModalButtonComponent, CategoryNavbarComponent, TopNavbarComponent,
        ToLocaleCurrencyPipe, ToStringPipe, RouterLink,
        NgFor,
    ],

})

export class HomeComponent implements OnInit {

    public apartments!: TApartment[]

    private _apiURL = environment.apiUrl

    constructor(private http: HttpClient) {

        this.getApartments().subscribe(data => {
            this.apartments = data.apartments
        })
    
    }

    public getApartments() {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
        return this.http.get<APIResponse>(this._apiURL, {'headers': headers})}

    ngOnInit() {}

}