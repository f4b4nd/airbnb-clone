import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { GuestsDialogContentComponent } from './guests-dialog.content.component'

@Component({
    selector: 'guests-dialog-button',
    template: `
        <button mat-button (click)="openDialog()">

            <span class="flex flex-col text-start">

                <span class="text-md"> Voyageurs </span>

                <span class="text-xs text-gray-400"> Ajouter des voyageurs </span>

            </span>

        </button>
    `,
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestsDialogButtonComponent {

    constructor(private readonly dialog: MatDialog) {}

    openDialog () {
        
        const dialogRef = this.dialog.open(GuestsDialogContentComponent, {
            width: '500px'
        })

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`)
        })
    }

}