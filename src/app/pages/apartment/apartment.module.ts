import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { ApartmentComponent } from './apartment.component'

@NgModule({
    declarations: [
        ApartmentComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
      ],
      providers: [],
      
      bootstrap: [ApartmentComponent]
    
})

export class ApartmentModule {}