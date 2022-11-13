import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  isDarkMode: boolean = true
  modalIsOpen: boolean = false;
  openModalNavbar() {
    this.modalIsOpen = true;
  }
  closeModalNavbar(){
    this.modalIsOpen = false;
  };
  constructor(public router: Router) {
  }
  ngOnInit() { 
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      document.documentElement.classList.add('dark');
      this.isDarkMode= true
    } else {
      document.documentElement.classList.remove('dark');
      this.isDarkMode= false
    }
  };
  toggleThemeMode() {
    this.isDarkMode
    ? localStorage['theme'] = 'light'
    : localStorage['theme'] = 'dark'
    if(this.isDarkMode) {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
    } else {
      document.documentElement.classList.add('dark')
      this.isDarkMode = true
    };
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
};









