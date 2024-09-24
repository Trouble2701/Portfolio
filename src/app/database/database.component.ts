import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatabaseComponent {

  languarge = 'DE';
  myInfoEN = ['Frontend Developer', 'Based in Dresden', 'Available for remote work'];
  myInfoDE = ['Frontend Entwickler', 'Wohne in Dresden', 'Remote Arbeiten'];
  myInfo = this.myInfoDE;

  navBarDE = ['Über mich', 'Skills', 'Projekte'];
  navBarEN = ['About me', 'Skills', 'Projects'];
  navBar = this.navBarDE;
  
  legalNoticeDE = 'Impressum';
  legalNoticeEN = 'Legal Notice';
  legalNotice = this.legalNoticeDE;

  frontendDE = 'Frontend Entwickler';
  frontendEN = 'Frontend Developer';
  frontend = this.frontendDE;
  constructor(){
    this.checkLang();
  }

  checkLang(){
    setInterval(() => {
      this.myInfo = this.languarge == 'DE' ? this.myInfoDE : this.myInfoEN;
      this.navBar = this.languarge == 'DE' ? this.navBarDE : this.navBarEN;
      this.legalNotice = this.languarge == 'DE' ? this.legalNoticeDE : this.legalNoticeEN;
      this.frontend = this.languarge == 'DE' ? this.frontendDE : this.frontendEN;
    })
  }
}
