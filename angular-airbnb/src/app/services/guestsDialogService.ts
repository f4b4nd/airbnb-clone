import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { GuestsCounter } from '../components/dialogs/guests/guests-dialog.button.component'

@Injectable({
    providedIn: 'root',

})

export class GuestsDialogService {
    
    public guestsCounter: Subject<GuestsCounter|null> = new Subject<GuestsCounter|null>()


    setData(data: GuestsCounter) {
        this.guestsCounter.next(data)
    }

    get guestCounter$ () {
        return this.guestsCounter.asObservable()
    }
    

}
