import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { Observable, combineLatest, map } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class ApartmentsGateway {

    private _apiURL = environment.apiUrl

    constructor (private http: HttpClient) {}

    public fetchApartments (): Observable<TApartment[]>  {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse>(`${this._apiURL}`, {headers})
            .pipe(
                map(res => res.apartments),
            )
          
    }

    public fetchApartmentByID (apartmentID$: Observable<string>) {

        const apartments$: Observable<TApartment[]> = this.fetchApartments()

        return combineLatest([apartments$, apartmentID$])
            .pipe(
                map(([apartments, apartmentID]) => apartments.find(apartment => `${apartment.id}` === apartmentID)),
            )

    }



}