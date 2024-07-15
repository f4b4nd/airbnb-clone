import { Component, EventEmitter, Input, OnInit, Output, Signal, computed } from '@angular/core'
import { Observable, first, map, take } from 'rxjs'
import { AsyncPipe, NgFor } from '@angular/common'

import { CapitalizePipe } from '../../pipes'


@Component({
    selector: 'category-navbar-checkbox',
    standalone: true,
    imports: [CapitalizePipe, AsyncPipe],
    template: `

        <label class="category-nav-item">

            <input 
                type="checkbox"
                [checked]="isActive"
                [disabled]="isActive"
                (change)="this.onChange(category.id)"
            />

            <img 
                class="w-[24px] h-[24px] contrast-[0.3]" 
                [src]="'./assets/icons/category/' + category.file" 
            />

            <div class="w-[max-content] text-gray-500 text-[12px]">
                {{category.name | capitalize }}
            </div>

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