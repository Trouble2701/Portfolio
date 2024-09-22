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

  constructor() {
    this.siteLang();
  }

  siteLang() {
    setInterval(() => {
      if (this.database.languarge == 'DE') {
        this.siteLangDE()
      } else {
        this.siteLangEN();
      }
    })
  }

  siteLangEN() {
    this.database.languarge = 'EN';
    this.background.nativeElement.setAttribute('style', 'left: 0');
  }

  siteLangDE() {
    this.database.languarge = 'DE';
    this.background.nativeElement.setAttribute('style', 'left: 42px');
  }
}
