import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule} from '@angular/material/dialog'

import { CounterButtonComponent } from '../../../components'


@Component({
    selector: 'guests-dialog-content',
    templateUrl: 'guests-dialog.content.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, CounterButtonComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `
       
    `,
})
export class GuestsDialogContentComponent {

}