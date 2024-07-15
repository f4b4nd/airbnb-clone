import { Component, EventEmitter, Input, Output } from '@angular/core'

import { CapitalizePipe } from '../../pipes'


@Component({
    selector: 'category-navbar-checkbox',
    standalone: true,
    imports: [CapitalizePipe],
    styles: `
        .category-nav-item {

            input:not(:disabled) + .item__wrapper:hover {
                cursor: pointer;            
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
                class="hidden"
                type="checkbox"
                [checked]="isActive"
                [disabled]="isActive"
                (change)="this.onChange(category.id)"
            />

            <span 
                class="item__wrapper flex flex-col items-center"
            > 

                <img 
                    class="w-[24px] h-[24px] contrast-[0.3]" 
                    [src]="'./assets/icons/category/' + category.file" 
                />

                <div class="w-[max-content] text-gray-500 text-[12px]">
                    {{category.name | capitalize }}
                </div>

            </span>

        </label>

    `,
})

export class CategoryNavbarCheckboxComponent {

    @Input() isActive: boolean = false

    @Input() category!: TCategory

    @Output() onChangeEmitter = new EventEmitter<number>


    onChange (categoryID: number) {

        this.onChangeEmitter.emit(categoryID)

    }

}