import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { HomeComponent } from './home.component'

import { CardComponent, CardTextComponent, CardGroupComponent, CardRowComponent, CategoryNavbarComponent, FilterModalButtonComponent } from 'src/app/components'

import { TopNavbarModule } from '../../components/top-navbar'

import { CapitalizePipe, ToStringPipe } from '../../pipes'

import { ToLocaleCurrencyModule } from '../../pipes'

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        CardTextComponent,
        CardGroupComponent,
        CardRowComponent,
        CategoryNavbarComponent,
        FilterModalButtonComponent,
        ToStringPipe,
        CapitalizePipe,        
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
        TopNavbarModule,
        ToLocaleCurrencyModule,
      ],
      providers: [],
      
      bootstrap: [HomeComponent]
    
})

export class HomeModule {}