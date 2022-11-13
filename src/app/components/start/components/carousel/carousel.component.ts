import { Component,EventEmitter,Input, Output   } from '@angular/core';
import { Photo } from '../../start.types';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Output() carouselPhoto: EventEmitter<any> = new EventEmitter()
  @Input() carouselPhotos: any[] = [];

  radius: number = 340;
  autoRotate = true;
  rotateSpeed = -60;
  imgWidth = 210;
  imgHeight = 240;
  odrag: any;
  ospin: any;
  aImg: any;
  ground: any;
  aEle: any
  // setTimeout(init, 1000);
  sX:any; 
  sY:any;
  nX:any;
  nY:any;
  desX:any = 0
  desY:any = 0
  tX: any = 0
  tY = 10;

  applyTransform(obj: any) {
    if (this.tY > 180) this.tY = 180;
    if (this.tY < 0) this.tY = 0;

    obj.style.transform = "rotateX(" + (-this.tY) + "deg) rotateY(" + (this.tX) + "deg)";
  }

  playSpin(yes: any) {
    this.ospin.style.animationPlayState = (yes ?
      'running' : 'paused');
  }

  init(delayTime:any) {

    this.odrag = document.getElementById('drag');
    this.ospin = document.getElementById('spin');
    this.aImg = this.ospin.getElementsByTagName('img');

    this.aEle = [...this.aImg];

    this.ospin.style.width = this.imgWidth + "px";
    this.ospin.style.height = this.imgHeight + "px";
  
    this.ground = document.getElementById('ground');
  
    this.ground.style.width = this.radius * 1 + "px";
    this.ground.style.height = this.radius * 1 + "px";

    for (var i = 0; i < this.aEle.length; i++) {
      this.aEle[i].style.transform = "rotateY("
        + (i * (360 / this.aEle.length)) + "deg) translateZ(" + this.radius + "px)";
      this.aEle[i].style.transition = "transform 1s";
      this.aEle[i].style.transitionDelay = delayTime || (this.aEle.length - i) / 5 + "s";
    }
  
    if (this.autoRotate) {
      var animationName = (this.rotateSpeed > 0 ? 'spin' : 'spinRevert');
      this.ospin.style.animation = `${animationName} ${Math.abs(this.rotateSpeed)} s infinite linear`;
    }
  
    document.onpointerdown = (e: any) => {
      clearInterval(this.odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;
  
  
      onpointermove = (e)=> {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
  
        this.desX = nX - sX;
        this.desY = nY - sY;
        this.tX += this.desX * 0.1;
        this.tY += this.desY * 0.1;
  
        this.applyTransform(this.odrag);
        sX = nX; sY = nY;
      };
  
      onpointerup = (e)=> {
        this.odrag.timer = setInterval(()=> {
          this.desX *= 0.95;
          this.desY *= 0.95;
          this.tX += this.desX * 0.1;
          this.tY += this.desY * 0.1;
  
          this.applyTransform(this.odrag);
  
          this.playSpin(false);
  
          if (Math.abs(this.desX) < 0.5 && Math.abs
            (this.desY) < 0.5) {
            clearInterval(this.odrag.timer);
            this.playSpin(true);
          }
        }, 17);
  
        onpointermove = onpointerup = null;
      };
  
      return false;
    };

  }
  openCarouselModal(photo:Photo){
    this.carouselPhoto.emit(photo)
  }

  ngOnInit(): void {
    setTimeout(() =>{
      this.init(100)
    }, 100);
  }
}




