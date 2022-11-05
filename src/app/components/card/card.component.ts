import { Component, Input } from '@angular/core'

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styles: [
        `.card { 
            width: 100%; 
            height: 400px; 
            display: flex; 
            flex-direction: column; 
        }`, 
        ".card__carousel { width: 100%; height: 70%; }",
        ".carousel__container { width: 100%; height: 100%; }",
        "img { height: 100%; width: 100%; object-fit: cover; }",
    ]
})

export class CardComponent {
    @Input() src = ""
    @Input() title = ""
}
