import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-group',
    template: `<div class="cards"><ng-content> </ng-content></div>`,
    styles: [".cards { display: flex; }"]
})

export class CardGroupComponent {
    @Input() items: any[] = []
}