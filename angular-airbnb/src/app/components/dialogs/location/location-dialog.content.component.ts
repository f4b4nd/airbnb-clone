import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule} from '@angular/material/dialog'


@Component({
    selector: 'location-dialog-content',
    templateUrl: 'location-dialog.content.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
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

    public locations = [
        { id: 1, name: 'Je suis flexible', img: 'world.jpg' },
        { id: 2, name: 'Afrique', img: 'africa.jpg' },
        { id: 3, name: 'Italie', img: 'italia.jpg' },
        { id: 4, name: 'Amérique du sud', img: 'south-america.jpg' },
        { id: 5, name: 'Asie du sud-est', img: 'south-asia.jpg' },
        { id: 6, name: 'Espagne', img: 'spain.jpg' },
    ]
}