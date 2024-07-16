import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { LocationDialogContentComponent } from './location-dialog.content.component'


@Component({
    selector: 'location-dialog-button',
    template: `
        <button mat-button (click)="openDialog()">

            <span class="flex flex-col text-start">

                <span class="text-md"> Destination </span>

                <span class="text-xs text-gray-400"> Rechercher une destination </span>
            </span>

        </button>
    `,
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDialogButtonComponent {

    constructor(private readonly dialog: MatDialog) {}

    openDialog () {
        
        const dialogRef = this.dialog.open(LocationDialogContentComponent)

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`)
        })
    }

}