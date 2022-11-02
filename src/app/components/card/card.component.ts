import { Component } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
})

export class CardComponent {
    title = "logo"
    src = ""
    rating = "5"
    price = "123€"
    location = "Parc national de la Haute Campine"
    date = "14-19 nov"
    ownerType = "Particulier"
}
