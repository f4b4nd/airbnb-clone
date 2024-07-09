import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { filter, map } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class ApartmentsGateway {

    private _apiURL = environment.apiUrl

    constructor (private http: HttpClient) {}

    public fetchApartments () {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse>(this._apiURL, {headers})
            .pipe(
                map(response => response.apartments),
            )
    }

    public fetchApartment (apartmentId: string) {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse>(this._apiURL, {headers})
            .pipe(
                map(response => response.apartments),
                map(apartments => apartments.find(apartment => `${apartment.id}` === apartmentId)),
            )
    }



}