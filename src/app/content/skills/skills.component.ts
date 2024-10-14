import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  database = inject(DatabaseComponent);

  intervalID: any;
  translateX: number = 0;
  direction: number = 1;
  fadeStart: number = 0;
  @ViewChild('skillButton') skillButton: ElementRef | any;
  @ViewChild('1') one: ElementRef | any;
  @ViewChild('2') two: ElementRef | any;
  @ViewChild('3') three: ElementRef | any;
  @ViewChild('4') four: ElementRef | any;
  @ViewChild('5') five: ElementRef | any;
  @ViewChild('6') six: ElementRef | any;
  @ViewChild('7') seven: ElementRef | any;
  @ViewChild('8') eight: ElementRef | any;
  @ViewChild('9') nine: ElementRef | any;
  @ViewChild('10') ten: ElementRef | any;

  constructor(){
    this.popUp();
  }

  animationOn(data: string) {
    this.fadeStart = data == 'start' ? 1 : 0;
    this.fadeRun()
  }

  fadeRun() {
    if (this.fadeStart == 1) {
      this.checkFading();
    } else {
      this.fadeStop();
    }
  }

  checkFading(){
    this.intervalID = setInterval(() => {
      this.fading();
    }, 25);
  }

  fading() {
    this.translateX += this.direction
    if (this.translateX >= 10 || this.translateX <= -10) this.direction *= -1;
    this.skillButton.nativeElement.setAttribute('style', 'transform: translateX(' + this.translateX + 'px)')
  }

  fadeStop() {
    this.translateX = 0;
    if (this.intervalID) clearInterval(this.intervalID);
    this.skillButton.nativeElement.setAttribute('style', 'transform: translateX(0);');
  }

  popUp(){
    setInterval(() => {
      this.elemScaleMiddle()
      setTimeout(() => this.elemScaleUp(), 100);
      setTimeout(() => this.elemScaleMiddle(), 200)
      setTimeout(() => this.elemScaleDown(), 300);
    }, 5000);
  }

  elemScaleUp(){
    this.one.nativeElement.setAttribute('style', 'transform: scale(1.2)');
    setTimeout(() => this.two.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 100);
    setTimeout(() => this.three.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 200);
    setTimeout(() => this.four.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 300);
    setTimeout(() => this.five.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 400);
    setTimeout(() => this.six.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 500);
    setTimeout(() => this.seven.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 600);
    setTimeout(() => this.eight.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 700);
    setTimeout(() => this.nine.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 800);
    setTimeout(() => this.ten.nativeElement.setAttribute('style', 'transform: scale(1.2)'), 900);
  }

  elemScaleMiddle(){
    this.one.nativeElement.setAttribute('style', 'transform: scale(1.1)');
    setTimeout(() => this.two.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 100);
    setTimeout(() => this.three.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 200);
    setTimeout(() => this.four.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 300);
    setTimeout(() => this.five.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 400);
    setTimeout(() => this.six.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 500);
    setTimeout(() => this.seven.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 600);
    setTimeout(() => this.eight.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 700);
    setTimeout(() => this.nine.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 800);
    setTimeout(() => this.ten.nativeElement.setAttribute('style', 'transform: scale(1.1)'), 900);
  }

  elemScaleDown(){
    this.one.nativeElement.setAttribute('style', 'transform: scale(1)');
    setTimeout(() => this.two.nativeElement.setAttribute('style', 'transform: scale(1)'), 100);
    setTimeout(() => this.three.nativeElement.setAttribute('style', 'transform: scale(1)'), 200);
    setTimeout(() => this.four.nativeElement.setAttribute('style', 'transform: scale(1)'), 300);
    setTimeout(() => this.five.nativeElement.setAttribute('style', 'transform: scale(1)'), 400);
    setTimeout(() => this.six.nativeElement.setAttribute('style', 'transform: scale(1)'), 500);
    setTimeout(() => this.seven.nativeElement.setAttribute('style', 'transform: scale(1)'), 600);
    setTimeout(() => this.eight.nativeElement.setAttribute('style', 'transform: scale(1)'), 700);
    setTimeout(() => this.nine.nativeElement.setAttribute('style', 'transform: scale(1)'), 800);
    setTimeout(() => this.ten.nativeElement.setAttribute('style', 'transform: scale(1)'), 900);
  }
}
