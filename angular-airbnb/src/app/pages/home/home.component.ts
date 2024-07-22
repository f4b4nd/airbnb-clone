import { Component } from '@angular/core'
import { ToLocaleCurrencyPipe, ToStringPipe } from '../../pipes'
import { RouterLink } from '@angular/router'

import { AsyncPipe } from '@angular/common'
import { HousesGateway } from '../../services/houses.gateway'
import { Observable } from 'rxjs'

import { CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent, CategoryNavbarComponent, FilterModalButtonComponent, TopNavbarComponent } from '../../components'

@Component({
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent,
        FilterModalButtonComponent, CategoryNavbarComponent, TopNavbarComponent,
        ToLocaleCurrencyPipe, ToStringPipe, RouterLink,
        AsyncPipe,
    ],

})

export class HomeComponent {

    houses$: Observable<House[]> = this.housesGateway.fetchHouses() || []

    constructor(private housesGateway: HousesGateway) {}

}