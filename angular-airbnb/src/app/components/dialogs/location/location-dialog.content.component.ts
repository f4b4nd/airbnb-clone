import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog'

import { SearchLocationOptions } from '../../../constants'
import { ReactiveFormsModule } from '@angular/forms'
import { Observable } from 'rxjs'

@Component({
    selector: 'location-dialog-content',
    templateUrl: 'location-dialog.content.html',
    standalone: true,
    imports: [ MatDialogModule, MatButtonModule, ReactiveFormsModule],
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

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    
    public locations = SearchLocationOptions

    setLocation (location: SearchLocationOption) {
        this.dialogRef.close({data: {location}})

        console.log('hits data', this.data)
    }

}