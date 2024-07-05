import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'toLocaleCurrency',
    standalone: true,
}) 

export class ToLocaleCurrencyPipe implements PipeTransform {
    transform(text: string) {
        if (!text) return text
        return `${text.replace(/\$/gm, '')} €`
    }
}