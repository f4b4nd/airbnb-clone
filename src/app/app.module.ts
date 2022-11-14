import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'

import { TopNavbarComponent, TopNavbarSearchComponent } from './components'

import { appRoutingModule } from './app.routing'

import { HomeModule } from './pages/home/home.module'

import { ApartmentModule } from './pages/apartment/apartment.module'

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent, 
    TopNavbarSearchComponent,
  ],
  imports: [
    HomeModule,
    ApartmentModule,

    BrowserModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
