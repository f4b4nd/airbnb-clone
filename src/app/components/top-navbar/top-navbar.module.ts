import { NgModule } from '@angular/core'

import { TopNavbarComponent, TopNavbarSearchComponent } from './'
import { BrowserModule } from '@angular/platform-browser'
import { appRoutingModule } from '../../app.routing'
import { TopNavbarProfileComponent } from './top-navbar.profile.component'

@NgModule({
    declarations: [
        TopNavbarComponent,
        TopNavbarProfileComponent,
        TopNavbarSearchComponent,
      ],
      imports: [
        BrowserModule,
        appRoutingModule,
      ],
      exports: [
        TopNavbarComponent, 
        TopNavbarSearchComponent,
      ],    
})

export class TopNavbarModule {}