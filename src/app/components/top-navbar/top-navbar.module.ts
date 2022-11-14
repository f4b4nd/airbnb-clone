import { NgModule } from '@angular/core'

import { TopNavbarComponent, TopNavbarSearchComponent } from './'
import { BrowserModule } from '@angular/platform-browser'
import { appRoutingModule } from '../../app.routing'

@NgModule({
    declarations: [
        TopNavbarComponent, 
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