import { NgFor, SlicePipe } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'gallery-preview',
    standalone: true,
    imports: [NgFor, SlicePipe],
    template: `
        <div 
            class="gallery-container relative cursor-pointer"
            (click)="displayFullGallery()"
        >

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

            <div class="absolute right-[20px] bottom-[20px] rounded-md bg-white border border-black"> 
                <button (click)="displayFullGallery()" class="flex items-center gap-2 px-4 py-1"> 
                    <img src="./assets/icons/grid.svg" class="w-[14px]" alt="grid"/>
                    <span class="font-medium"> Afficher toutes les photos </span>
                </button>
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
