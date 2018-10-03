import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InlineSelectModule } from './modules/inline-select/inline-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InlineSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }