import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {
  database = inject(DatabaseComponent);
  intervalID: any;

  @Input() frontend: any;
  @Input() project: any;
  @Input() contact: any;
  @ViewChild('projectSpan') projectSpan: ElementRef | any;
  @ViewChild('contactSpan') contactSpan: ElementRef | any;

  contactLang: any;
  translateX: number = 0;
  direction: number = 1;
  fadeStart: number = 0;

  constructor(private sanitizer: DomSanitizer) {
    setInterval(() => this.setLang(), 100);

  }

  setLang() {
    this.frontend = this.database.frontend;
    this.project = this.database.headLine[0];
    this.contact = this.database.headLine[1];
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
    type=='project' ? this.projectElm() : this.contactElm();
  }

  projectElm(){
    return this.projectSpan.nativeElement.setAttribute('style', 'transform: translateX(' + this.translateX + 'px)');
  }

  contactElm(){
    return this.contactSpan.nativeElement.setAttribute('style', 'transform: translateX(' + this.translateX + 'px)');
  }

  fadeStop() {
    this.translateX = 0;
    if (this.intervalID) clearInterval(this.intervalID);
    this.projectSpan.nativeElement.setAttribute('style', 'transform: translateX(0);');
    this.contactSpan.nativeElement.setAttribute('style', 'transform: translateX(0);');
  }
}