import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { appRoutingModule } from '../../app.routing'

import { HomeComponent } from './home.component'

import { CardComponent, CardTextComponent, CardGroupComponent, CardRowComponent } from 'src/app/components'
import { TopNavbarModule } from '../../components/top-navbar/top-navbar.module';
import { ToStringPipe } from '../../toString.pipe';

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        CardTextComponent,
        CardGroupComponent,
        CardRowComponent,
        ToStringPipe,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
        TopNavbarModule,
      ],
      providers: [],
      
      bootstrap: [HomeComponent]
    
})

export class HomeModule {}