import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatabaseComponent {


  datas =
    [
      {
        myInfo: ['Frontend Entwickler', 'Wohne in Dresden', 'Remote Arbeiten'],
        navBar: ['Über mich', 'Skills', 'Projekte'],
        legalNotice: 'Impressum',
        frontend: 'Frontend Entwickler',
        headline: ['Meine Arbeit', 'Schreib mir'],
      },
      {
        myInfo: ['Frontend Developer', 'Based in Dresden', 'Available for remote work'],
        navBar: ['About me', 'Skills', 'Projects'],
        legalNotice: 'Legal Notice',
        frontend: 'Frontend Developer',
        headline: ['Check my Work', 'Contact me'],
      }
    ];

  languarge = 'DE';
  toLang = 0;
  myInfo = this.datas[this.toLang].myInfo;
  navBar = this.datas[this.toLang].navBar;
  legalNotice = this.datas[this.toLang].legalNotice;
  frontend = this.datas[this.toLang].frontend;
  headLine = this.datas[this.toLang].headline;
  constructor() {
    this.setLang();
  }

  setLang() {
    setInterval(() => {
      this.toLang = this.languarge == 'DE' ? 0 : 1;
      this.headerLang();
      this.footerLang();
    }, 100)
  }

  headerLang() {
    this.myInfo = this.datas[this.toLang].myInfo;
    this.navBar = this.datas[this.toLang].navBar;
    this.frontend = this.datas[this.toLang].frontend;
    this.headLine = this.datas[this.toLang].headline;
  }

  footerLang() {
    this.legalNotice = this.datas[this.toLang].legalNotice;
  }
}
