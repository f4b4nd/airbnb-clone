import { Component, Input } from '@angular/core'

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
})

export class CardComponent {
    @Input() title = ""
    @Input() src = ""
    @Input() rating = ""
    @Input() price = ""
    @Input() location = ""
    @Input() date = ""
    @Input() ownerType = ""
}
