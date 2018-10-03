import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectInlineModule } from './modules/select-inline/select-inline.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelectInlineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
