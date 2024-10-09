import { Component, ElementRef, inject, ViewChild, HostListener } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  database = inject(DatabaseComponent);

  screenWidth:number=0;
  review: number = 2;
  time:number = 0;
  minHeightSee:number = 273;
  maxHeightSee:number = 274;
  minHeight:number = 247;
  maxHeight:number = 248;
  leftFirst: number = 680;
  leftSecond: number = 690;
  leftThird: number = 1367;

  @ViewChild('review1') review1: ElementRef | any;
  @ViewChild('review2') review2: ElementRef | any;
  @ViewChild('review3') review3: ElementRef | any;
  @ViewChild('dot1') dot1: ElementRef | any;
  @ViewChild('dot2') dot2: ElementRef | any;
  @ViewChild('dot3') dot3: ElementRef | any;
  @ViewChild('leftArrow') leftArrow: ElementRef | any;
  @ViewChild('rightArrow') rightArrow: ElementRef | any;

  constructor() {
    setInterval(() => this.showHeight(), 100);
    setInterval(() => this.dotShow(), 100);
    setInterval(() => this.timeChange(), 1000);
  }

  timeChange(){
    this.time == 15 ? this.rightSlide() : this.time += 1;
  }

  dotShow() {
    this.dot1.nativeElement.setAttribute('style', this.review == 1 ? 'background-color: #3DCFB6' : 'background-color: #FFFFFF');
    this.dot2.nativeElement.setAttribute('style', this.review == 2 ? 'background-color: #3DCFB6' : 'background-color: #FFFFFF');
    this.dot3.nativeElement.setAttribute('style', this.review == 3 ? 'background-color: #3DCFB6' : 'background-color: #FFFFFF');
    this.showReview();
  }

  arrowChange(data:string){
    data=='left' ? this.leftArrow.nativeElement.setAttribute('src', 'assets/img/icons/arrowLeftGreen.png') : this.rightArrow.nativeElement.setAttribute('src', 'assets/img/icons/arrowRightGreen.png');
  }

  arrowChangeBack(data:string){
    data=='left' ? this.leftArrow.nativeElement.setAttribute('src', 'assets/img/icons/arrowLeft.png') : this.rightArrow.nativeElement.setAttribute('src', 'assets/img/icons/arrowRight.png');
  }

  leftSlide() {
    this.time = 0;
    this.review = this.review == 1 ? 3 : this.review - 1;
  }

  rightSlide() {
    this.time = 0;
    this.review = this.review == 3 ? 1 : this.review + 1;
  }

  showReview() {
    if (this.review == 1) {
      this.review1.nativeElement.setAttribute('style', 'left: '+this.leftFirst+'px; min-height: '+this.minHeightSee+'px !important; max-height: '+this.maxHeightSee+'px !important; background-color: #3DCFB64D; z-index: 1');
      this.review2.nativeElement.setAttribute('style', 'left: '+this.leftSecond+'px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
      this.review3.nativeElement.setAttribute('style', 'left: -'+this.leftThird+'px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
    } else if (this.review == 2) {
      this.review1.nativeElement.setAttribute('style', 'left: -14px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
      this.review2.nativeElement.setAttribute('style', 'left: 0; min-height: '+this.minHeightSee+'px !important; max-height: '+this.maxHeightSee+'px !important; background-color: #3DCFB64D; z-index: 1');
      this.review3.nativeElement.setAttribute('style', 'left: 13px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
    } else if (this.review == 3) {
      this.review1.nativeElement.setAttribute('style', 'left: '+this.leftThird+'px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
      this.review2.nativeElement.setAttribute('style', 'left: -'+this.leftSecond+'px; min-height '+this.minHeight+'px !important; max-height '+this.maxHeight+'px !important; background-color: #3DCFB61A; z-index: 0');
      this.review3.nativeElement.setAttribute('style', 'left: -'+this.leftFirst+'px; min-height: '+this.minHeightSee+'px !important; max-height: '+this.maxHeightSee+'px !important; background-color: #3DCFB64D; z-index: 1');
    }
  }

  showHeight(){
    if(window.innerWidth > 700){
      this.bigWidth();
    }else{
      this.smalWidth();
    }
  }

  smalWidth(){
    this.minHeightSee = 359;
    this.maxHeightSee = 360;
    this.minHeight = 333;
    this.maxHeight = 334;
    this.leftFirst = 350;
    this.leftSecond = 360;
    this.leftThird = 707;
  }
  
  bigWidth(){
    this.minHeightSee = 273;
    this.maxHeightSee = 274;
    this.minHeight = 247;
    this.maxHeight = 248;
    this.leftFirst = 680;
    this.leftSecond = 690;
    this.leftThird = 1367;
  }
}
