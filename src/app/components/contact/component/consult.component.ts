import { Component  } from '@angular/core';

@Component({
  selector: 'consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class  ConsultComponent {
 
  modalIsOpen: boolean = false;
  
  openModal() {
    this.modalIsOpen = true;
  }

  closeModal(){
    this.modalIsOpen = false;
  }
}
