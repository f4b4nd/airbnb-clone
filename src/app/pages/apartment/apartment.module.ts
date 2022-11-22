import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { TopNavbarModule } from '../../components/top-navbar/top-navbar.module'

import { ApartmentComponent } from './apartment.component'

import { GalleryPreviewComponent,  GalleryFullComponent } from 'src/app/components'
import { ToLocaleDatePipe } from '../../pipes/toLocaleDate.pipe'


@NgModule({
    declarations: [
        ApartmentComponent,
        GalleryPreviewComponent,
        GalleryFullComponent,
        ToLocaleDatePipe
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
        TopNavbarModule,
      ],
      providers: [],
      
      bootstrap: [ApartmentComponent]
    
})

export class ApartmentModule {}