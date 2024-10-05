import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-right-lateral',
  standalone: true,
  imports: [],
  templateUrl: './right-lateral.component.html',
  styleUrl: './right-lateral.component.scss'
})
export class RightLateralComponent {

  @ViewChild('myGithub') myGithub: ElementRef | any;
  @ViewChild('myLinkedIn') myLinkedIn: ElementRef | any;
  @ViewChild('dotGit') dotGit: ElementRef | any;
  @ViewChild('dotLink') dotLink: ElementRef | any;
  @ViewChild('mailTo') mailTo: ElementRef | any;
  @ViewChild('mailIMG') mailIMG: ElementRef | any;

  constructor(){}

  changeGithubOn(){
    this.myGithub.nativeElement.src = 'assets/img/icons/GithubWhite.png';
    this.dotGit.nativeElement.setAttribute('style', 'display:flex');
  }

  changeGithubOff(){
    this.myGithub.nativeElement.src = 'assets/img/icons/Github.png';
    this.dotGit.nativeElement.setAttribute('style', 'display:none');
  }

  changeLinkedInOn(){
    this.myLinkedIn.nativeElement.src = 'assets/img/icons/LinkedinWhite.png';
    this.dotLink.nativeElement.setAttribute('style', 'display:flex');
  }

  changeLinkedInOff(){
    this.myLinkedIn.nativeElement.src = 'assets/img/icons/Linkedin.png';
    this.dotLink.nativeElement.setAttribute('style', 'display:none');
  }

  changeMailOn(){
    this.mailIMG.nativeElement.src = 'assets/img/icons/contactWhite.png';
    this.mailTo.nativeElement.setAttribute('style', 'display:flex');
  }

  changeMailOff(){
    this.mailIMG.nativeElement.src = 'assets/img/icons/contact.png';
    this.mailTo.nativeElement.setAttribute('style', 'display:none');
  }
}
