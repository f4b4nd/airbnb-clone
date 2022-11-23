import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { ApartmentComponent } from './'

import { GalleryPreviewComponent, GalleryFullComponent, BookingFormComponent } from '../../components'

import { TopNavbarModule } from '../../components/top-navbar'

import { ToLocaleDatePipe , ToLocaleCurrencyModule} from '../../pipes'


@NgModule({
    declarations: [
        ApartmentComponent,
        GalleryPreviewComponent,
        GalleryFullComponent,
        BookingFormComponent,
        ToLocaleDatePipe,        
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
        TopNavbarModule,
        ToLocaleCurrencyModule,
      ],
      providers: [],
      
      bootstrap: [ApartmentComponent]
    
})

export class ApartmentModule {}