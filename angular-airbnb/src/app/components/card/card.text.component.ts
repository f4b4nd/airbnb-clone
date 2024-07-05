import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-text',
    standalone: true,
    template: `<span> {{text}} </span>`,
})

export class CardTextComponent {
    @Input() text = ""
}