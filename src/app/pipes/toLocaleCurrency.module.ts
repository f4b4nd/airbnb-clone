import { NgModule } from '@angular/core'

import { ToLocaleCurrencyPipe } from '../pipes/'


@NgModule({
  declarations: [ToLocaleCurrencyPipe],
  exports: [ToLocaleCurrencyPipe],
})

export class ToLocaleCurrencyModule { }