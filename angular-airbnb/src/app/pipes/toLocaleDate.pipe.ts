import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'toLocaleDate',
    standalone: true,
}) 

export class ToLocaleDatePipe implements PipeTransform {
    transform(date: Date) {
        if (!date) return date
        const options = {year: 'numeric', weekday: 'long', month: 'long', day: 'numeric'}
        return date.toLocaleDateString('fr-FR', options as any)
    }
}