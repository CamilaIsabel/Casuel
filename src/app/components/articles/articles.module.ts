import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticlesComponent } from './articles.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
  ArticlesComponent,
  CardComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class ArticlesModule {

 }