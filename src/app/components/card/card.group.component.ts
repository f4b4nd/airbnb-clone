import { Component, Input } from "@angular/core"

@Component({
    selector: 'card-group',
    template: `
        <div class="cards">
            <ng-content></ng-content>
        </div>`,
    styles: [".cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); grid-gap: 1em; justify-items: center;}"]
})

export class CardGroupComponent {
    @Input() items: any[] = []
}