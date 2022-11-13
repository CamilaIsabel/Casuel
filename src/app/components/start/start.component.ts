import { Component, OnInit } from '@angular/core';
import { Photo } from './start.types';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  modalIsOpen: boolean = false;
  currentPhotoInModal: Photo = {};
  
  openCarouselModal(photo: Photo) {
   this.currentPhotoInModal= photo
    this.modalIsOpen = true;
  }
  closeModal(){
    this.modalIsOpen = false;
  }
  
  constructor() { }

  ngOnInit(): void {
  };

  carouselPhotos: Photo[] = [
    {
      src: '/assets/img/bed.jpg',
      alt: 'bed'
    },
    {
      src: '/assets/img/table.jpg',
      alt: 'table'
    },
    {
      src: '/assets/img/table2.jpg',
      alt: 'table'
    },
    {
      src: '/assets/img/table3.jpg',
      alt: 'table'
    },
    {
      src: '/assets/img/wardrobe.jpg',
      alt: 'wardrobe'
    },
    {
      src: '/assets/img/wardrobe2.jpg',
      alt: 'wardrobe'
    },
  ]
}
