import { Component } from '@angular/core'
import { CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent, CategoryNavbarComponent, FilterModalButtonComponent } from '../../components'
import { ToLocaleCurrencyPipe, ToStringPipe } from '../../pipes'
import { RouterLink } from '@angular/router'
import { TopNavbarComponent } from '../../components/top-navbar'
import { AsyncPipe, NgFor } from '@angular/common'
import { ApartmentsGateway } from '../../services/apartments.gateway'
import { Observable } from 'rxjs'

@Component({
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        CardComponent, CardGroupComponent, CardRowComponent, CardTextComponent,
        FilterModalButtonComponent, CategoryNavbarComponent, TopNavbarComponent,
        ToLocaleCurrencyPipe, ToStringPipe, RouterLink,
        NgFor, AsyncPipe,
    ],

})

export class HomeComponent {

    apartments$: Observable<TApartment[]> = this.apartmentsGateway.fetchApartments() || []

    constructor(private apartmentsGateway: ApartmentsGateway) {}

}