import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { SelectInlineComponent } from './select-inline.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  declarations: [SelectInlineComponent],
  exports: [
    SelectInlineComponent
  ]
})
export class SelectInlineModule { }
