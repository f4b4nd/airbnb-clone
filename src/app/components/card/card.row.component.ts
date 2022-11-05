import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-row',
    template: `
        <div class="card__row">
            <ng-content> </ng-content>
        </div>`,
    styles: [".card__row { display: flex;}"],
})

export class CardRowComponent {
}