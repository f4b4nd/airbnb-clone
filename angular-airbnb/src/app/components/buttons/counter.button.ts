import { AsyncPipe } from '@angular/common'
import { Component, EventEmitter, Input, Output, Signal, WritableSignal, signal } from '@angular/core'
import { Observable, Subject, map, of } from 'rxjs'

@Component({
    selector: 'counter-button',
    standalone: true,
    imports: [AsyncPipe],
    styles: `

        $gainsboro: #DCDCDC;

        .icon {
            font-size: 20px;
            line-height: 30px;
        }

        button {
            height: 33px;
            width: 33px;

            border-color: gray;

            &:disabled {
                border-color: $gainsboro;
            }

        }
    `,
    template: `

        <div class="counter-button__wrapper flex gap-3 items-center">

            <div class="decrement-btn hover:cursor-pointer">
                <button
                    type="button"
                    class="border rounded-full"
                    [disabled]="(counter$ | async)! <= 0"
                    (click)="this.decrement()"
                >
                    <span class="icon">&#8722;</span>
                </button>
            </div>

            <span class="counter__count">{{counter$ | async}}</span>
            
            <div class="increment-btn hover:cursor-pointer">
                <button 
                    type="button"
                    class="border rounded-full" 
                    (click)="this.increment()"
                >   
                    <span class="icon"> + </span>
                </button>
            </div>

        </div>
    `,
})

export class CounterButtonComponent {
    
    @Input() counter$: Observable<number> = of(0)

    @Output() onChangeEmitter = new EventEmitter<Observable<number>>

    decrement() {

        this.counter$ = this.counter$.pipe(map(v => v > 0 ? v - 1: 0))
        
        this.onChangeEmitter.emit(this.counter$)

    }

    increment() {

        this.counter$ = this.counter$.pipe(map(v => v + 1))
        
        this.onChangeEmitter.emit(this.counter$)

    }
}