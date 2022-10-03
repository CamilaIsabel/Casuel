import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],

  exports: [
    CarouselComponent,
  ]
})
export class CarouselModule {

 }