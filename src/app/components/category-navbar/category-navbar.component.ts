import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'

@Component({
    selector: 'category-navbar',
    template: `
        <div class="">


        </div>
    `,
})

export class CategoryNavbarComponent implements OnInit {

    categories: TCategory[] = []

    private _jsonURL = `${environment.apiUrl}/categories`
    
    constructor(private http: HttpClient) {

        this.getCategories().subscribe(data => {
            console.log(data)
            this.categories = data
        })
    
    }

    public getCategories(): Observable<any> {
        return this.http.get(this._jsonURL)
    }
    
    ngOnInit() {}
      
}
