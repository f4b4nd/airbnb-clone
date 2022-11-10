import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { HomeComponent } from './home.component'

import { CardComponent, CardTextComponent, CardGroupComponent, CardRowComponent } from 'src/app/components'

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        CardTextComponent,
        CardGroupComponent,
        CardRowComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
      ],
      providers: [],
      
      bootstrap: [HomeComponent]
    
})

export class HomeModule {}