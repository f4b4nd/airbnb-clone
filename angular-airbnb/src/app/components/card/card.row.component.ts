import { Component } from "@angular/core"

@Component({
    selector: 'card-row',
    standalone: true,
    template: `
        <ng-container>
            <ng-content></ng-content>
        </ng-container>`,
})

export class CardRowComponent {
}