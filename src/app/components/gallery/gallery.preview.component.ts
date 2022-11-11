import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'gallery-preview',
    template: `
        <div class="gallery-container relative">

            <div class="gallery grid grid-cols-[2fr_1fr_1fr] grid-rows-[repeat(2,_190px)] gap-2 rounded-lg overflow-hidden">
                <div 
                    *ngFor="let pictureUrl of gallery | slice:0:5"
                    class="img-container first:row-span-full h-full w-full"
                >
                    <img 
                        class="h-full w-full object-cover" 
                        src={{pictureUrl}} 
                        alt={{alt}}
                    />
                </div>
            </div>

            <div class="absolute right-[20px] bottom-[20px] rounded-md bg-white"> 
                <button (click)="displayFullGallery()" class="px-2 py-1"> Afficher toutes les photos</button>
            </div>

        </div>`,
})

export class GalleryPreviewComponent {
    @Input() gallery: string[] = []
    @Input() alt: string = ""

    @Output() displayFullGalleryEvent = new EventEmitter()

    public displayFullGallery() {
        this.displayFullGalleryEvent.emit()
    }
}
