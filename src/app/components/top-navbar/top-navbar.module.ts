import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { appRoutingModule } from '../../app.routing'

import { TopNavbarComponent, TopNavbarSearchComponent, TopNavbarProfileComponent } from './'

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
    ],    
})

export class TopNavbarModule {}