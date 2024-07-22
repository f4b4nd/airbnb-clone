import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { Observable, combineLatest, delay, map, timer } from "rxjs"

@Injectable({
    providedIn: 'root',
})

export class HousesGateway {

    private _apiURLHouses = environment.apiURLHouses

    constructor (private http: HttpClient) {}

    public fetchHouses (): Observable<House[]>  {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .set('Access-Control-Allow-Origin', '*')

        return this.http.get<APIResponse['houses']>(this._apiURLHouses, {headers})
            .pipe(
                map(response => response.data),
                delay(1000),
            )

    }

    public fetchHouseByID (houseID$: Observable<string>) {

        // if API was real, it would call directly an endpoint specific to an houseID
        
        const houses$: Observable<House[]> = this.fetchHouses()
        const minimumDelay$ = timer(1000)

        const request$ = combineLatest([houses$, houseID$])
            .pipe(
                map(([houses, houseID]) => houses.find(house => `${house.id}` === houseID)),
            )

        return combineLatest([request$, minimumDelay$])
            .pipe(
                map(([request, _]) => request),
            )
            
    }



}