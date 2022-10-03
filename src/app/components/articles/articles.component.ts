
import { Component} from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';
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
          description:'',
          size:'',  
          src:'./assets/icons/articles/furniture3view.svg',
      }
    },
    {
      title:'Chairs per unit',
      src:'./assets/icons/articles/furniture2.svg',
      alt: 'table2',
      description:'Ideal for decorating your home',
      details:{
        description:'',
        size:'',
        src:'./assets/icons/articles/furniture2view.svg',
      }
    
    },

    {
      title:'kitchen cabinet',
      src:'./assets/icons/articles/furniture4.svg',
      alt: 'table4',
      description:'Excellent for multipurpose functions',
      details:{
        description:'',
        size:'',
        src:'./assets/icons/articles/furniture4view.svg',
      }
    },
  ]  
}
