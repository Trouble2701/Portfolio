import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { NavComponent } from '../../above-the-fold/nav/nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {

  database = inject(DatabaseComponent)
  @ViewChild('top') top: ElementRef | any;
  @ViewChild('bottom') bottom: ElementRef | any;
  @ViewChild('ger') ger: ElementRef | any;
  @ViewChild('en') en: ElementRef | any;

  intervalID: any;
  translateX: number = 0;
  direction: number = 1;
  fadeStart: number = 0;

  constructor(private router: Router){
    setInterval(() => this.setLangPrivatePolicy(), 100);
  }

  setLangPrivatePolicy(){
    this.ger.nativeElement.setAttribute('style', this.database.toLang == 0 ? 'display:flex' : 'display: none');
    this.en.nativeElement.setAttribute('style', this.database.toLang == 1 ? 'display:flex' : 'display: none');
  }

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
