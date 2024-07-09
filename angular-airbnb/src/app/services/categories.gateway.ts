import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { map } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class CategoriesGateway {

    private _apiURL = environment.apiUrl

    constructor (private http: HttpClient) {}

    public fetchCategories () {
        return this.http.get<APIResponse>(this._apiURL)
            .pipe(
                map(response => response.categories),
            )
    }

}