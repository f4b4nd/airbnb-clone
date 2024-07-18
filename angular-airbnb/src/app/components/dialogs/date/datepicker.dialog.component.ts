import { ChangeDetectionStrategy, Component, Inject, ViewChild, inject } from '@angular/core'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'

import { MAT_DATE_LOCALE } from '@angular/material/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'datepicker-dialog',
    template: `
        <mat-calendar 
            [selected]="selectedDate" 
            (selectedChange)="onChange($event)">
        </mat-calendar>
    `,
    standalone: true,
    imports: [MatFormFieldModule, MatDatepickerModule],
    providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DatepickerDialogComponent {

    readonly dialogRef = inject(MatDialogRef<{data: {date:Date}}>)

    constructor(@Inject(MAT_DIALOG_DATA) public data: {date: Date}) {}

    selectedDate: Date = new Date()
    

    onChange ($event : Date) {
        this.selectedDate = $event
        this.dialogRef.close({ data: {date: $event}})
        console.log('selected', this.selectedDate)
    }

}