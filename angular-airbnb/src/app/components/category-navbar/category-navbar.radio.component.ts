import { Component, EventEmitter, Input, Output, Signal } from '@angular/core'

import { CapitalizePipe } from '../../pipes'


@Component({
    selector: 'category-navbar-radio',
    standalone: true,
    imports: [CapitalizePipe],
    styles: `

        $gainsboro: #DCDCDC;

        .category-nav-item {

            input:not(:disabled) + .item__wrapper:hover {
                cursor: pointer;
                border-bottom: 2px solid $gainsboro;
            }

            input:checked + .item__wrapper {
                border-bottom: 2px solid black;
                font-weight: bold;
            }

        }
    `,
    template: `

        <label class="category-nav-item">

            <input
                type="radio"
                name="category-nav-group"
                class="hidden"
                [checked]="isActive$$()"
                [disabled]="isActive$$()"
                (change)="onChange(houseCategory.id)"
            />

            <span 
                class="item__wrapper flex flex-col items-center"
            >

                <img 
                    class="w-[24px] h-[24px] contrast-[0.3]" 
                    [src]="'./assets/icons/category/' + houseCategory.file" 
                />

                <div class="w-[max-content] text-gray-500 text-[12px]">
                    {{houseCategory.name | capitalize }}
                </div>

            </span>

        </label>

    `,
})

export class CategoryNavbarRadioComponent {

    @Input() isActive$$!: Signal<boolean>

    @Input() houseCategory!: HouseCategory

    @Output() onChangeEmitter = new EventEmitter<number>


    onChange (houseCategoryID: number) {

        this.onChangeEmitter.emit(houseCategoryID)
        
    }

}