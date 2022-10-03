import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsultComponent } from './component/consult.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
   ContactComponent,
   ConsultComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class ContactModule {

 }