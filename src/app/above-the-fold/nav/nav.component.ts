import { Component, ElementRef, inject, ViewChild, HostListener } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

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
  @ViewChild('backgroundMobile') backgroundMobile: ElementRef | any;
  @ViewChild('dotNav') dotLink: ElementRef | any;
  @ViewChild('menuMobile') menuMobile: ElementRef | any;
  @ViewChild('showMenu') showMenu: ElementRef | any;
  @ViewChild('blackBack') blackBack: ElementRef | any;

  menuIsOpen: number = 0;

  constructor(private router: Router) {
    this.siteLang();
  }

  siteLang() {
    setInterval(() => {
      localStorage.getItem('lang') == 'DE' ? this.siteLangDE() : this.siteLangEN();
    })
  }

  siteLangEN() {
    localStorage.setItem('lang', 'EN');
    this.database.languarge = 'EN';
    this.background.nativeElement.setAttribute('style', 'left: -1px');
    this.backgroundMobile.nativeElement.setAttribute('style', 'left: -1px');
  }

  siteLangDE() {
    localStorage.setItem('lang', 'DE');
    this.database.languarge = 'DE';
    this.background.nativeElement.setAttribute('style', 'left: 42px');
    this.backgroundMobile.nativeElement.setAttribute('style', 'left: 42px');
  }

  dotNavChange(number: number): void {
    let Number = (152 * number);
    let leftSide = 65 + Number;
    this.dotLink.nativeElement.setAttribute('style', 'display:flex; left:' + leftSide + 'px');
  }

  dotNavOut() {
    this.dotLink.nativeElement.setAttribute('style', 'display:none');
  }

  reload() {
    this.router.navigateByUrl('/');
  }

  mobileMenu() {
    this.menuMobile.nativeElement.setAttribute('src', 'assets/img/icons/menuMobileWhite.png');
  }

  mobileMenuDont() {
    this.menuMobile.nativeElement.setAttribute('src', 'assets/img/icons/menuMobile.png');
  }

  openMenu() {
    this.menuIsOpen = this.menuIsOpen == 0 ? 1 : 0;
    this.showMenu.nativeElement.setAttribute('style', this.menuIsOpen == 1 ? 'display: flex' : 'display: none');
    this.blackBack.nativeElement.setAttribute('style', this.menuIsOpen == 1 ? 'display: flex' : 'display: none');
  }

  onEvent(event: any): void {
    event.stopPropagation();
 }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {

    if (width >= 1000) {
      this.menuIsOpen = 0;
      this.showMenu.nativeElement.setAttribute('style', 'display: none');
      this.blackBack.nativeElement.setAttribute('style', 'display: none');
    }
  }
}
