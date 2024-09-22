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
  constructor(){
    this.checkLang();
  }

  checkLang(){
    setInterval(() => {
      this.languarge == 'DE' ? this.myInfo = this.myInfoDE : this.myInfo = this.myInfoEN;
      this.languarge == 'DE' ? this.navBar = this.navBarDE : this.navBar = this.navBarEN;
    })
  }
}
