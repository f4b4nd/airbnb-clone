import { Component, Input } from '@angular/core'

@Component({
    selector: 'card',
    template: `
        <ng-container>

            <div class="card__carousel h-[65%]">

                <div class="carousel__container h-full w-full rounded-[13px] overflow-hidden">
                    <img class="h-full w-full object-cover" src="{{src}}" alt="{{title}}" />
                </div>

            </div>

            <ng-content></ng-content>

        </ng-container>`,
})

export class CardComponent {
    @Input() src = ""
    @Input() title = ""
}
