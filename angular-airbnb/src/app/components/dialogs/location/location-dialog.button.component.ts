import { ChangeDetectionStrategy, Component, EventEmitter, Output, WritableSignal, computed, signal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { LocationDialogContentComponent } from './location-dialog.content.component'
import { NgIf } from '@angular/common'


@Component({
    selector: 'location-dialog-button',
    template: `
        <button mat-button (click)="openDialog()">

            <span class="flex flex-col text-start">

                <span class="text-md"> Destination </span>

                @if (location$$(); as location) {
                    <span class="text-xs text-gray-400">
                        {{ location.id > 0 ? location.name : 'Rechercher une région' }}
                    </span>
                }
                @else {
                    <span class="text-xs text-gray-400">
                        Rechercher une région'
                    </span>
                }
                
                
            </span>

        </button>
    `,
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDialogButtonComponent {

    constructor(private readonly dialog: MatDialog) {}

    public location$$: WritableSignal<SearchLocationOption|null> = signal(null)
    
    @Output() onChangeEmitter = new EventEmitter<SearchLocationOption>
    
    openDialog () {

        const dialogRef = this.dialog.open(LocationDialogContentComponent, {
            data: {
                location: this.location$$()
            },
        })

        dialogRef.afterClosed().subscribe(res => {
            const location: SearchLocationOption = res.data.location
            this.location$$.set(location)
            this.onChangeEmitter.emit(location)
        })
    }

}