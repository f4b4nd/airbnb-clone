import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'

import { LocationDialogContentComponent } from './location-dialog.content.component'
import { AsyncPipe, NgIf } from '@angular/common'
import { FormGroup } from '@angular/forms'
import { Observable, map, of, take } from 'rxjs'


@Component({
    selector: 'location-dialog-button',
    template: `
        <button mat-button type="button" (click)="openDialog()">

            <span class="flex flex-col text-start">

                <span class="text-md"> Destination </span>

                @if (location$ | async; as location) {

                    <span *ngIf="location.id > 0" class="text-md">{{location.name}}</span>

                    <span *ngIf="location.id <= 0" class="text-xs text-gray-400">Rechercher une région</span>

                }
                @else {
                    <span class="text-xs text-gray-400">Rechercher une région</span>
                }
                
                
            </span>

        </button>
    `,
    standalone: true,
    imports: [ MatButtonModule, MatDialogModule, NgIf, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDialogButtonComponent {

    constructor(private readonly dialog: MatDialog) {}

    @Input() form!: FormGroup

    @Output() onChangeEmitter = new EventEmitter<SearchLocationOption>
    
    public location$: Observable<SearchLocationOption|null> = of(null)

    openDialog () {

        const dialogRef = this.dialog.open(LocationDialogContentComponent, {
            data: {
                form: this.form,
            },
        })

        this.location$ = dialogRef.afterClosed()
            .pipe(
                take(1),
                map(res => (res?.data?.location) as SearchLocationOption),
            )
        
        this.location$.subscribe((location) => {
            if (!location) return
            this.onChangeEmitter.emit(location)
        })
        
    }

}