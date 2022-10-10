import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  constructor(public router: Router) {
    
   }

   ngOnInit(){
    
   }
}
   