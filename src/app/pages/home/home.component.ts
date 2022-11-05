import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public apartments!: any[]

    private _jsonURL = './assets/apartments-data-mock-50-rows.json'

    constructor(private http: HttpClient) {

        this.getApartments().subscribe(data => {
            console.log(data)
            this.apartments = data
        })
    
    }

    public getApartments(): Observable<any> {
        return this.http.get(this._jsonURL)
    }

    ngOnInit() {}

}