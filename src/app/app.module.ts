import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './pages/home/home.component'
import { ApartmentComponent } from './pages/apartment/apartment.component'
import { appRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApartmentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    appRoutingModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
