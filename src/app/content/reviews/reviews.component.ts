import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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

  review: number = 2;
  time:number = 0;

  @ViewChild('review1') review1: ElementRef | any;
  @ViewChild('review2') review2: ElementRef | any;
  @ViewChild('review3') review3: ElementRef | any;
  @ViewChild('dot1') dot1: ElementRef | any;
  @ViewChild('dot2') dot2: ElementRef | any;
  @ViewChild('dot3') dot3: ElementRef | any;
  @ViewChild('leftArrow') leftArrow: ElementRef | any;
  @ViewChild('rightArrow') rightArrow: ElementRef | any;

  constructor() {
    setInterval(() => this.dotShow(), 100);
    setInterval(() => this.timeChange(), 1000);
  }

  timeChange(){
    this.time == 5 ? this.rightSlide() : this.time += 1;
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
      this.review1.nativeElement.setAttribute('style', 'left: 680px; min-height: 273px !important; max-height: 274px !important; background-color: #3DCFB64D; z-index: 1');
      this.review2.nativeElement.setAttribute('style', 'left: 690px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
      this.review3.nativeElement.setAttribute('style', 'left: -1368px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
    } else if (this.review == 2) {
      this.review1.nativeElement.setAttribute('style', 'left: -14px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
      this.review2.nativeElement.setAttribute('style', 'left: 0; min-height: 273px !important; max-height: 274px !important; background-color: #3DCFB64D; z-index: 1');
      this.review3.nativeElement.setAttribute('style', 'left: 13px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
    } else if (this.review == 3) {
      this.review1.nativeElement.setAttribute('style', 'left: 1367px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
      this.review2.nativeElement.setAttribute('style', 'left: -691px; min-height 247px !important; max-height 248px !important; background-color: #3DCFB61A; z-index: 0');
      this.review3.nativeElement.setAttribute('style', 'left: -680px; min-height: 273px !important; max-height: 274px !important; background-color: #3DCFB64D; z-index: 1');
    }
  }
}
