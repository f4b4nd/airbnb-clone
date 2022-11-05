import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'

import { HomeComponent, ApartmentComponent } from './pages'

import { NavbarComponent, CardComponent, CardTextComponent, CardGroupComponent, CardRowComponent} from './components'

import { appRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApartmentComponent,
    NavbarComponent, 
    CardComponent,
    CardTextComponent,
    CardGroupComponent,
    CardRowComponent,
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
