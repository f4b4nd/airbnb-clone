import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { GuestsDialogService } from '../../../services/guestsDialogService'
import { GuestsDialogContentComponent } from './guests-dialog.content.component'
import { Observable } from 'rxjs'
import { AsyncPipe, NgIf } from '@angular/common'

export type GuestsCounter = {
    adultsCount: number,
    childrenCount: number,
    babiesCount: number,
    petsCount: number,
}


@Component({
    selector: 'guests-dialog-button',
    template: `
        <button mat-button type="button" (click)="openDialog()">

            <span class="flex flex-col text-start">

                <span class="text-md"> Voyageurs </span>

                @if (guestsCounter$ | async; as guests) {

                    <span 
                        *ngIf="getTotalGuestsCounter(guests) > 0" 
                        class="text-xs text-gray-400"
                    > 
                        {{ getTotalGuestsCounter(guests) + ' voyageur(s)'  }}
                    </span>
                    
                    <span *ngIf="getTotalGuestsCounter(guests) <= 0" class="text-xs text-gray-400">Ajouter des voyageurs</span>

                } @else {
                    <span class="text-xs text-gray-400">Ajouter des voyageurs</span>
                }

            </span>

        </button>
    `,
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, AsyncPipe, NgIf],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GuestsDialogButtonComponent {

    constructor(
        private readonly dialog: MatDialog,
        private guestsDialogService: GuestsDialogService,
    ) {}


    guestsCounter$!: Observable<GuestsCounter|null>

    @Output() onChangeEmitter = new EventEmitter<GuestsCounter>


    ngOnInit () {
        this.guestsCounter$ = this.guestsDialogService.guestCounter$
    }

    getTotalGuestsCounter (guestsCounter: GuestsCounter) {
        const sumArray = ((arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0))
        const guestsValues = Object.values(guestsCounter)
        return  sumArray(guestsValues)
    }


    openDialog () {
        
        const dialogRef = this.dialog.open(GuestsDialogContentComponent, {
            width: '500px',
        })


        dialogRef.afterClosed().subscribe(() => {

            this.guestsCounter$.subscribe(guestsCounter => {
                if (!guestsCounter) return
                this.onChangeEmitter.emit(guestsCounter)
            })
            
        })

    }

}