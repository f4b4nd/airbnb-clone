import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'

import { AsyncPipe, DatePipe, NgIf } from '@angular/common'
import { DatepickerDialogComponent } from './datepicker.dialog.component'



@Component({
    selector: 'datepicker-button',
    template: `

        <button mat-button type="button" (click)="openDialog()">

            <span class="flex flex-col text-start">
                
                <span class="text-md"> {{title}} </span> 

                @if (selectedDate$$(); as selectedDate) {
                    <span class="text-md">
                        {{selectedDate | date: 'd MMMM'}} 
                    </span>
                }
                @else {
                    <span class="text-xs text-gray-400"> Quand ? </span>
                }

            </span>

        </button>

    `,
    standalone: true,
    imports: [MatButtonModule, AsyncPipe, NgIf, DatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DatepickerButtonComponent {

    constructor(private readonly dialog: MatDialog) {}

    @Input() title!: 'Arrivée' | 'Départ'

    @Output() onChangeEmitter = new EventEmitter<Date>

    public selectedDate$$: WritableSignal<Date|null> = signal(null)

    openDialog () {
        
        const dialogRef = this.dialog.open(DatepickerDialogComponent, {
            width: '400px',
        })


        dialogRef.afterClosed().subscribe((res) => {
            console.table(res.data)
            const selectedDate = res?.data?.date
            if (!selectedDate) return
            this.selectedDate$$.set((selectedDate as Date))
            this.onChangeEmitter.emit((selectedDate as Date))
        })

    }

}