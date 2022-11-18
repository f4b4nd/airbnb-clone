import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'

@Component({
    selector: 'category-navbar',
    template: `
        <div class="category-navbar overflow-x-auto px-8 py-4">

            <div class="navbar__wrapper flex items-center gap-x-8"> 

                <div
                    *ngFor="let category of categories" 
                    class="category-nav-item"
                >

                    <button class="item__wrapper flex flex-col items-center gap-y-2">

                        <img 
                            class="w-[24px] h-[24px] contrast-[0.3]" 
                            [src]="'/assets/icons/category/' + category.file" 
                        />

                        <div class=" w-[max-content] text-gray-500 text-[12px]"> {{category.label | capitalize}} </div>
                    </button>

                </div>

            </div>
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

    public getCategories() {
        return this.http.get<TCategory[]>(this._jsonURL)
    }
    
    ngOnInit() {}
      
}
