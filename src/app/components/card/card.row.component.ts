import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-row',
    template: `
        <ng-container>
            <ng-content></ng-content>
        </ng-container>`,
})

export class CardRowComponent {
}