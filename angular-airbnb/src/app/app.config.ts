import { ApplicationConfig, LOCALE_ID } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { provideHttpClient } from '@angular/common/http'

import fr from '@angular/common/locales/fr'

import { DatePipe, registerLocaleData } from '@angular/common'
import { routes } from './app.routes'

import { engineFeature } from '../state/engine.store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'


registerLocaleData(fr)

export const appConfig: ApplicationConfig = {
    providers: [
        { 
            provide: LOCALE_ID,
            useValue: "fr_FR", 
        },
        provideRouter(routes),
        provideState(engineFeature),
        provideStore(),
        provideHttpClient(),
        DatePipe, provideAnimationsAsync(),
    ]
}