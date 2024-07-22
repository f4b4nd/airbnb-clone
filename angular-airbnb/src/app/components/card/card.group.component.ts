import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-group',
    standalone: true,
    template: `
        <ng-container>
            <ng-content></ng-content>
        </ng-container>`,
})

export class CardGroupComponent {}