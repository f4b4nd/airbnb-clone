import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'

import { AsyncPipe, DatePipe, NgIf } from '@angular/common'
import { DatepickerDialogComponent } from './datepicker.dialog.component'
import { Observable, Subject, map, of, take, takeUntil } from 'rxjs'



@Component({
    selector: 'datepicker-button',
    template: `

        <button mat-button type="button" (click)="openDialog()">

            <span class="flex flex-col text-start">
                
                <span class="text-md"> {{title}} </span> 

                @if (selectedDate$ | async; as selectedDate) {
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


    public selectedDate$: Observable<Date|null> = of(null)

    private unsubscribe$ = new Subject<boolean>()

    openDialog () {
        
        const dialogRef = this.dialog.open(DatepickerDialogComponent, {
            width: '400px',
        })

        this.selectedDate$ = dialogRef.afterClosed()
            .pipe(
                takeUntil(this.unsubscribe$),
                map((res) => (res?.data?.date) as Date),
            )
        
        this.selectedDate$.subscribe(selectedDate => {
            if (!selectedDate) return
            this.onChangeEmitter.emit(selectedDate)
        })
        
  
    }

    ngOnDestroy() {
        this.unsubscribe$.next(true)
        this.unsubscribe$.unsubscribe()
    }

}        