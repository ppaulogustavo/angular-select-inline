import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSelectComponent } from './inline-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  declarations: [InlineSelectComponent],
  exports: [
    InlineSelectComponent
  ]
})
export class InlineSelectModule { }
