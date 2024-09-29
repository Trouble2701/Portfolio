import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  database = inject(DatabaseComponent);
  @ViewChild('background') background: ElementRef | any;
  @ViewChild('dotNav') dotLink: ElementRef | any;

  constructor() {
    this.siteLang();
  }

  siteLang() {
    setInterval(() => {
      this.database.languarge == 'DE' ? this.siteLangDE() : this.siteLangEN();
    })
  }

  siteLangEN() {
    this.database.languarge = 'EN';
    this.background.nativeElement.setAttribute('style', 'left: -1px');
  }

  siteLangDE() {
    this.database.languarge = 'DE';
    this.background.nativeElement.setAttribute('style', 'left: 42px');
  }

  dotNavChange(number:number):void{
    let Number = (152*number);
    let leftSide = 65+Number;
    this.dotLink.nativeElement.setAttribute('style', 'display:flex; left:'+leftSide+'px');
  }

  dotNavOut(){
    this.dotLink.nativeElement.setAttribute('style', 'display:none');
  }
}
