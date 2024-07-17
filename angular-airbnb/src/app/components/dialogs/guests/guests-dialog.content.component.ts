import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'

import { CounterButtonComponent } from '../../../components'
import { GuestsCounter } from './guests-dialog.button.component'
import { GuestsDialogService } from '../../../services/guestsDialogService'
import { Observable } from 'rxjs'




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

    constructor (private guestsDialogService: GuestsDialogService) {}

    public guestsCounter!: GuestsCounter

    ngOnInit() {

        this.guestsCounter = {
            adultsCount: 0,
            childrenCount: 0,
            babiesCount: 0,
            petsCount: 0,
        }
    
    }
 
    setAdultsCount ($event: Observable<number>) {
        $event.subscribe(counter => {this.guestsCounter.adultsCount = counter})
        this.guestsDialogService.setData(this.guestsCounter)
    }

    setChildrenCount ($event: Observable<number>) {
        $event.subscribe(counter => {this.guestsCounter.childrenCount = counter})
        this.guestsDialogService.setData(this.guestsCounter)
    }

    setBabiesCount ($event: Observable<number>) {
        $event.subscribe(counter => {this.guestsCounter.babiesCount = counter})
        this.guestsDialogService.setData(this.guestsCounter)
    }

    setPetsCount ($event: Observable<number>) {
        $event.subscribe(counter => {this.guestsCounter.petsCount = counter})
        this.guestsDialogService.setData(this.guestsCounter)
    }

}