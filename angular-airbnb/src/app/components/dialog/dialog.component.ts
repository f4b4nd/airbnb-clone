import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'


@Component({
    selector: 'dialog-button',
    templateUrl: 'dialog.button.html',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogButtonComponent {

    readonly dialog = inject(MatDialog)

    openDialog () {
        const dialogRef = this.dialog.open(DialogContentComponent)

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`)
        })
    }
}

@Component({
    selector: 'dialog-content',
    templateUrl: 'dialog.content.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {}