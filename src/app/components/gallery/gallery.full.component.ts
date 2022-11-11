import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'gallery-full',
    template: `
        <div class="gallery-full-container">

            <h1> Full </h1>
            <button class="btn btn-close" (click)="hideFullGallery()"> X </button>

        </div>`,
    styles: [
        ".gallery-full-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1; background-color: black;}",
        ".btn-close {color: white;}"
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
