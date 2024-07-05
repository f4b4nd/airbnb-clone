import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ToLocaleCurrencyPipe } from '../../pipes'

@Component({
    selector: 'booking-form',
    standalone: true,
    imports: [ToLocaleCurrencyPipe],
    template: `
        <div class="booking-form flex flex-col gap-4 p-6 border rounded-xl shadow-3xl">

            <div class="row flex justify-between">
                <div class="price"> <span class="font-bold text-xl">{{apartment.price | toLocaleCurrency}}</span> par nuit </div>
                <button class="reviews underline"> {{apartment.number_of_reviews }} commentaires </button>
            </div>

            <div class="row flex border my-2"> 
                <input type="date" class="w-full p-2 border-r"/>
                <input type="date" class="w-full p-2"/>
            </div>

            <div class="btn-container bg-gradient-to-r from-crimson to-mediumVioletRed rounded-lg">
                <button 
                    class="w-full text-white font-medium py-3"
                    > Réserver 
                </button>
            </div>

            <div class="text text-center font-light"> Aucun montant ne vous sera débité pour le moment </div>

            <div class="row flex justify-between text-gray-800">
                <div class="price__label underline"> {{apartment.price | toLocaleCurrency}} x {{numberOfNights}} nuits </div>
                <div class="price__value"> {{price * 7}} € </div>
            </div>

            <div class="row flex justify-between text-gray-800">
                <div class="price__label underline "> Frais de ménage </div>
                <div class="price__value"> {{cleaningFee}} € </div>
            </div>


            <div class="row flex justify-between text-gray-800">
                <div class="price__label underline "> Frais de service </div>
                <div class="price__value"> {{price * 7}} € </div>
            </div>

            <div class="row flex justify-between text-gray-800">
                <div class="price__label underline "> Taxes </div>
                <div class="price__value"> {{taxes}} € </div>
            </div>

            <div class="row flex justify-between border-t font-bold">
                <div class="price__label mt-2"> Total </div>
                <div class="price__value mt-2"> {{total}} € </div>
            </div>
    
        </div>`,
})

export class BookingFormComponent {
    @Input() apartment!: TApartment

    numberOfNights = 5
    price = 200
    cleaningFee = 200
    serviceFee = 100
    taxes = 14
    total = this.price * this.numberOfNights + this.cleaningFee + this.serviceFee + this.taxes
}
