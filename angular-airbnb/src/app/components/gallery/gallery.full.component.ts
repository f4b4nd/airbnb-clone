import { NgClass } from '@angular/common'
import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'gallery-full',
    standalone: true,
    imports: [NgClass],
    template: `
        <div class="gallery-full-container absolute top-0 left-0 w-full bg-white z-[2]">

            <div class="container container-house py-4">

                <div class="row flex justify-end my-4">
                    <button class="btn btn-close" (click)="hideFullGallery()"> X </button>
                </div>

                <div class="gallery grid grid-cols-[1fr_1fr]  gap-2 mx-auto max-w-[800px]">

                    @for (pictureUrl of gallery; track pictureUrl; let i = $index) {
                    
                        <div 
                            class="img-container h-full w-full"
                            [ngClass]="{'col-span-full' : i === 0 || (i + 1) % 3 === 1}"
                        >
                            <img 
                                class="h-full w-full object-cover" 
                                src={{pictureUrl}} 
                                alt={{alt}}
                            />
                        </div>

                    }
                </div>

            </div>

        </div>`,
})

export class GalleryFullComponent {
    @Input() gallery: string[] = []
    @Input() alt: string = ""

    @Output() hideFullGalleryEvent = new EventEmitter()

    public hideFullGallery () {
        this.hideFullGalleryEvent.emit()
    }
}
