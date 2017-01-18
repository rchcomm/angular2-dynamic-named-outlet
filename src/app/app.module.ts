import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { DynamicOutletService } from './shared/DynamicOutlet.Service';

@NgModule({
  imports: [BrowserModule, routing],
  entryComponents: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    DynamicOutletService
  ],
  schemas: [
    
  ],
})
export class AppModule { }
