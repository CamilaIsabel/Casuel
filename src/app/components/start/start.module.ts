import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StartComponent } from './start.component';

@NgModule({
  declarations: [
    StartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],

  exports: [
    StartComponent,
  ]
})
export class StartModule { }