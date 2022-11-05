import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-text',
    template: `<span> {{text}} </span>`,
})

export class CardTextComponent {
    @Input() text = ""
}