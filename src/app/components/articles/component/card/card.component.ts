import { Component, Input } from '@angular/core';
import { CardData, } from './card.types';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls:['./card.component.css'],
})
export class CardComponent {
  @Input() cardData: CardData = {}

  modalIsOpen: boolean = false;
  openModal() {
    this.modalIsOpen = true;
  }
  closeModal(){
    this.modalIsOpen = false;
  };
  modalDetailsIsOpen: boolean = false; 
  openView() {
    this.modalDetailsIsOpen = true;
  }
  closeView(){
    this.modalDetailsIsOpen = false;
  }
}