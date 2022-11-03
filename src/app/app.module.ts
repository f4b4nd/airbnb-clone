import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'

import { HomeComponent, ApartmentComponent } from './pages'

import { NavbarComponent, CardComponent } from './components'

import { appRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApartmentComponent,
    NavbarComponent, 
    CardComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
