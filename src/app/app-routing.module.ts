import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ContactComponent } from './components/contact/contact.component';
import { StartComponent } from './components/start/start.component';
// import { StartModule } from './components/start/start.module';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'start'},
  {path:'start',  component:StartComponent},
  {path:'articles', component:ArticlesComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 

})
export class AppRoutingModule { 


}
