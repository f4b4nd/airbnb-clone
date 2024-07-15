import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { Observable, map } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class CategoriesGateway {

    private _apiURL = environment.apiUrl

    constructor (private http: HttpClient) {}

    public fetchCategories (): Observable<TCategory[]> {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse>(this._apiURL, {headers})
            .pipe(
                map(response => response.categories),
            )

    }

}