import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TopHeaderComponent } from './top-header.component';

@NgModule({
  declarations: [
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    RouterModule,
  ],
  providers: [],
  exports: [
    TopHeaderComponent,
  ]
})
export class TopHeaderModule { }