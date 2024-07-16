import { Component } from '@angular/core'

@Component({
    selector: 'counter-button',
    standalone: true,
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
                    class="border rounded-full"
                    [disabled]="this.counter <= 0"
                    (click)="this.decrement()"
                >
                    <span class="icon">&#8722;</span>
                </button>
            </div>

            <span class="counter__count"> {{counter}} </span>
            
            <div class="increment-btn hover:cursor-pointer">
                <button 
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

    counter: number = 0

    decrement() {

        if (this.counter <= 0) {
            return
        }
        this.counter -= 1
    }

    increment() {
        this.counter += 1
    }
}