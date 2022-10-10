
import { Component} from '@angular/core';
import { CardData } from './component/card/card.types';

@Component({
  selector: 'articles',
  templateUrl:'./articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  cards: CardData[] = [
    {
      title:'Coffe table',
      src:'./assets/icons/articles/furniture1.svg',
      alt: 'table1',
      description:'Vintage style, great quality and class',
      details:{ 
        description:'Material:oak wood Colour: Dark Honey Details: metal fittings',
        size:'100 X 45 X 60cm',
        src:'./assets/icons/articles/furniture1view.svg',
      }
    },   
    
    {
      title:'oak wardrobee',
      src: './assets/icons/articles/furniture3.svg',
      alt: 'table3',
      description:'Fine finishes, wide and resistant',
      details:{
          description:'Material: oak wood Colour: cream Details: 3 additional drawers',
          size:'135 X 50 X 40cm',  
          src:'./assets/icons/articles/furniture3view.svg',
      }
    },
    {
      title:'Chairs per unit',
      src:'./assets/icons/articles/furniture2.svg',
      alt: 'table2',
      description:'Ideal for decorating your home',
      details:{
        description:'Material: Oak Wood, Color: Light Brown, Details: Classic and different',
        size:'200 X 65 X 50cm',
        src:'./assets/icons/articles/furniture2view.svg',
      }
    
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },

    {
      title:'Coffe table',
      src:'./assets/icons/articles/furniture1.svg',
      alt: 'table1',
      description:'Vintage style, great quality and class',
      details:{ 
        description:'Material:oak wood Colour: Dark Honey Details: metal fittings',
        size:'100 X 45 X 60cm',
        src:'./assets/icons/articles/furniture1view.svg',
      }
    },   
    
    {
      title:'oak wardrobee',
      src: './assets/icons/articles/furniture3.svg',
      alt: 'table3',
      description:'Fine finishes, wide and resistant',
      details:{
          description:'Material: oak wood Colour: cream Details: 3 additional drawers',
          size:'135 X 50 X 40cm',  
          src:'./assets/icons/articles/furniture3view.svg',
      }
    },
    {
      title:'Chairs per unit',
      src:'./assets/icons/articles/furniture2.svg',
      alt: 'table2',
      description:'Ideal for decorating your home',
      details:{
        description:'Material: Oak Wood, Color: Light Brown, Details: Classic and different',
        size:'200 X 65 X 50cm',
        src:'./assets/icons/articles/furniture2view.svg',
      }
    
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'Material:Stainless steel, Colour:Black and white, Details: added accessories included',
        size:'120 X 35 X 80cm',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },
  ]  
}
