import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'capitalize',
    standalone: true,
}) 

export class CapitalizePipe implements PipeTransform {
    transform(text: string) {
        if (!text) return text
        return text[0].toLocaleUpperCase() + text.slice(1).toLocaleLowerCase()
    }
}