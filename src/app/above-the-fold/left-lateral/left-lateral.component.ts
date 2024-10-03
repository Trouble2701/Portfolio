import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left-lateral',
  standalone: true,
  imports: [],
  templateUrl: './left-lateral.component.html',
  styleUrl: './left-lateral.component.scss'
})
export class LeftLateralComponent {

  @ViewChild('arrowSlide') arrowSlide: ElementRef | any;
  translateY: number = 0;
  direction: number = 1;

  constructor() {
    setInterval(() => this.slide(), 100);
  }

  slide() {
    this.translateY += this.direction;
    if (this.translateY >= 10 || this.translateY <= 0) {
      this.direction *= -1;
    }
    this.arrowSlide.nativeElement.setAttribute('style', 'transform: translateY(' + this.translateY + 'px)');
  }
}
