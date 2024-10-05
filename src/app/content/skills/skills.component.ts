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
}
