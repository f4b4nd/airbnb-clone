import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'gallery-full',
    template: `
        <div class="gallery-full-container bg-white absolute inset-0">

            <div class="container max-w-[1120px] mx-auto">

                <div class="row flex justify-end py-4">
                    <button class="btn btn-close" (click)="hideFullGallery()"> X </button>
                </div>

                <div class="gallery grid grid-cols-[1fr_1fr] grid-rows-[repeat(auto,_190px)] gap-2 overflow-hidden">
                    <div 
                        *ngFor="let pictureUrl of gallery ; let i = index"
                        class="img-container h-full w-full"
                        [ngClass]="{'col-span-full' : i === 0 || (i + 1) % 3 === 1}"
                    >
                        <img 
                            class="h-full w-full object-cover" 
                            src={{pictureUrl}} 
                            alt={{alt}}
                        />
                    </div>
                </div>

            </div>


        </div>`,
    styles: [
        ".gallery-full-container { z-index: 1 }",
        ".btn-close {color: black;}"
    ]
})

export class GalleryFullComponent {
    @Input() gallery: string[] = []
    @Input() alt: string = ""

    @Output() hideFullGalleryEvent = new EventEmitter()

    public hideFullGallery () {
        this.hideFullGalleryEvent.emit()
    }
}
