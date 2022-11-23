import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../../environments/environment'

@Component({
    templateUrl: './home.component.html'
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