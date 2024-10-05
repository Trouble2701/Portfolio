import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {


  @ViewChild('top') top: ElementRef | any;
  @ViewChild('bottom') bottom: ElementRef | any;

  intervalID: any;
  translateX: number = 0;
  direction: number = 1;
  fadeStart: number = 0;

  animationOn(data: string, type:string) {
    this.fadeStart = data == 'start' ? 1 : 0;
    this.fadeRun(type)
  }

  fadeRun(type:string) {
    if (this.fadeStart == 1) {
      this.checkFading(type);
    } else {
      this.fadeStop();
    }
  }

  checkFading(type:string){
    this.intervalID = setInterval(() => {
      this.fading(type);
    }, 25);
  }

  fading(type:string) {
    this.translateX += this.direction
    if (this.translateX >= 10 || this.translateX <= -10) this.direction *= -1;
    type=='top' ? this.projectElm() : this.contactElm();
  }

  projectElm(){
    return this.top.nativeElement.setAttribute('style', 'transform: translateX(' + this.translateX + 'px)');
  }

  contactElm(){
    return this.bottom.nativeElement.setAttribute('style', 'transform: translateX(' + this.translateX + 'px)');
  }

  fadeStop() {
    this.translateX = 0;
    if (this.intervalID) clearInterval(this.intervalID);
    this.top.nativeElement.setAttribute('style', 'transform: translateX(0);');
    this.bottom.nativeElement.setAttribute('style', 'transform: translateX(0);');
  }

  back(){
    history.back();
  }
}
