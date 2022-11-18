import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public apartments!: TApartment[]

    private _jsonURL = `${environment.apiUrl}/apartments`

    constructor(private http: HttpClient) {

        this.getApartments().subscribe(data => {
            console.log(data)
            this.apartments = data
        })
    
    }

    public getApartments() {
        return this.http.get<TApartment[]>(this._jsonURL)
    }

    ngOnInit() {}

}