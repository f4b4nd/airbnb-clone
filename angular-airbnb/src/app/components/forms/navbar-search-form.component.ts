import { Component } from '@angular/core'
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

import { LocationDialogButtonComponent, GuestsDialogButtonComponent } from '../../components'

@Component({
    selector: 'navbar-search-form',
    standalone: true,
    imports: [LocationDialogButtonComponent, GuestsDialogButtonComponent, ReactiveFormsModule],

    template: `
        <form
            [formGroup]="searchForm"
            (ngSubmit)="this.onSubmit()"
            class="search flex items-center px-3 py-2 border rounded-[50px] gap-4 text-sm"
        >

            <location-dialog-button 
                id="locationID"
                formControlName="locationID"
                (onChangeEmitter)="setLocation($event)"
            />

            <input
                id="locationID2"
                type="number"
                formControlName="location"
   
            >

            <input
                id="aze"
                type="text"
            >

            <div class="search__dates px-2 border-r ">
                <button class="font-medium"> Une semaine </button>
            </div>

            <guests-dialog-button />

            <div class="search__submit">

                <button 
                    type="submit"
                    [disabled]="!searchForm.valid"
                    class="image-container h-[32px] w-[32px] bg-crimson flex justify-center items-center rounded-full"
                > 
            
                    <img 
                        src={{submitLogoSrc}} 
                        alt="submit" 
                        class="h-[12px] w-[12px]" 
                    />
                    
                </button>
            </div>

        </form>
    `,
})

export class NavbarSearchFormComponent {

    submitLogoSrc = "./assets/icons/loupe.svg"

    searchForm = new FormGroup({
        location: new FormControl<SearchLocationOption|null>(null, 
            [Validators.required]
        ),
    
    })

    get location () {
        return this.searchForm.get('location')
    }

    setLocation ($event: SearchLocationOption) {
        this.searchForm.setValue({location: $event})
        console.log('searchForm', $event)
    }

    onSubmit () {
        if (!this.searchForm.valid) {
            console.log('submit invalid')
            return
        }
        console.log('form submit', this.searchForm.value)
    }

}
