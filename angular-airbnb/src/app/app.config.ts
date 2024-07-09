import { ApplicationConfig, LOCALE_ID } from '@angular/core'
import { provideRouter } from '@angular/router'
import fr from '@angular/common/locales/fr'

import { DatePipe, registerLocaleData } from '@angular/common'
import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'


registerLocaleData(fr)

export const appConfig: ApplicationConfig = {
    providers: [
        { 
            provide: LOCALE_ID,
            useValue: "fr_FR", 
        },
        provideRouter(routes),
        provideHttpClient(),
        DatePipe,
    ]
}