import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    houses!: any[]

    private _jsonURL = './assets/houses-data-mock.json'

    constructor(private http: HttpClient) {

        this.getHouses().subscribe(data => {
            console.log(data)
            this.houses = data
        })
    
    }

    public getHouses(): Observable<any> {
        return this.http.get(this._jsonURL)
    }

    ngOnInit() {}

}