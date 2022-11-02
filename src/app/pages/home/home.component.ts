import { NgModule, Component } from '@angular/core'

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent {
    title = "Gingelom, Belgique"
    src = ""
    rating = "5"
    price = "123€"
    location = "Parc national de la Haute Campine"
    date = "14-19 nov"
    ownerType = "Particulier"
}