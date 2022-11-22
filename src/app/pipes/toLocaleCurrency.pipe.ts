import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'toLocaleCurrency'}) 

export class ToLocaleCurrencyPipe implements PipeTransform {
    transform(text: string) {
        if (!text) return text
        return `${text.replace(/\$/gm, '')} €`
    }
}