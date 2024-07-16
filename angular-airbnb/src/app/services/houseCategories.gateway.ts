import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { Observable, map } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class HouseCategoriesGateway {

    private _apiURLHouseCategories = environment.apiURLHouseCategories

    constructor (private http: HttpClient) {}

    public fetchHouseCategories (): Observable<HouseCategory[]> {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse['houseCategories']>(this._apiURLHouseCategories, {headers})
            .pipe(
                map(response => response.data),
            )

    }

}