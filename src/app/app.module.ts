import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';


import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartModule } from './components/start/start.module';
import { TopHeaderModule } from './components/header/top-header.module';
import { ArticlesModule } from './components/articles/articles.module';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    StartModule,
    TopHeaderModule,
    ArticlesModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
