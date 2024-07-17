import { ChangeDetectionStrategy, Component, ModelSignal, Output, inject, model } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog'

import { SearchLocationOptions } from '../../../constants'

@Component({
    selector: 'location-dialog-content',
    templateUrl: 'location-dialog.content.html',
    standalone: true,
    imports: [ MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `
        $gainsboro: #DCDCDC;

        .location__wrapper:hover {
            background-color: $gainsboro;
            cursor: pointer;
        }
        input:checked + .location__wrapper {
            background-color: $gainsboro;
        }
    `,
})
export class LocationDialogContentComponent {
    
    readonly dialogRef = inject(MatDialogRef<LocationDialogContentComponent>)

    public locations = SearchLocationOptions

    setLocation (location: SearchLocationOption) {
        this.dialogRef.close({data: {location}})
    }

}