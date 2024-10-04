import { NgClass } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  database = inject(DatabaseComponent);
  pname: string = 'Your name goes here';
  pemail: string = 'youremail@email.com';
  phelp: string = 'Hello Sven, i am intrested in..';
  name: string = '';
  email: string = '';
  help: string = '';
  @Input() contactMe: any;
  @Input() working: any;
  @Input() problem: any;
  @Input() contactThrougth: any;
  @Input() developer: any;
  @Input() talk: any;
  @Input() whatsName: any;
  @Input() namePlace: any;
  @Input() whatsEmail: any;
  @Input() emailPlace: any;
  @Input() whatsHelp: any;
  @Input() helpPlace: any;
  @Input() ppFirst: any;
  @Input() ppSecond: any;
  @Input() ppThird: any;
  @Input() hello: any;
  nameFailed: any;
  emailFailed: any;
  helpFailed: any;
  acceptFailed: any;
  checkBox: boolean = false;
  dataCheck: boolean = true;
  @ViewChild('accept') accept: ElementRef | any;
  @ViewChild('nameType') nameType: ElementRef | any;
  @ViewChild('emailType') emailType: ElementRef | any;
  @ViewChild('helpType') helpType: ElementRef | any;

  constructor() {
    setInterval(() => {
      this.setLang();
      this.setLangFaild();
      this.setLangPP();
    }, 100);
  }
  sendMail(name: string, email: string, help: string, checkBox: any) {
    if (!name) {
      this.nameType.nativeElement.setAttribute('placeholder', this.nameFailed);
      this.setClass(name);
    } else if (!email) {
      this.emailType.nativeElement.setAttribute('placeholder', this.emailFailed);
      this.setClass(email);
    } else if (!help) {
      this.helpType.nativeElement.setAttribute('placeholder', this.helpFailed);
      this.setClass(help);
    } else {
      if(this.ValidateEmail(email)){
        if (!checkBox) {
          this.accept.nativeElement.setAttribute('style', 'display: flex');
        } else {
          this.accept.nativeElement.setAttribute('style', 'display: none');
          console.log('send Mail');
        }
      }
    }
  }

  setClass(data: string) {
    if (!data) {
      this.dataCheck = false;
    } else {
      this.dataCheck = true;
    }
  }

  setLang() {
    this.contactMe = this.database.contact[0];
    this.working = this.database.contact[1];
    this.problem = this.database.contact[2];
    this.contactThrougth = this.database.contact[3];
    this.developer = this.database.contact[4];
    this.talk = this.database.contact[5];
    this.whatsName = this.database.contact[6];
    this.pname = this.database.contact[7];
    this.whatsEmail = this.database.contact[8];
    this.pemail = this.database.contact[9];
    this.whatsHelp = this.database.contact[10];
    this.phelp = this.database.contact[11];
  }

  setLangFaild() {
    this.nameFailed = this.database.contact[12];
    this.emailFailed = this.database.contact[13];
    this.helpFailed = this.database.contact[14];
    this.acceptFailed = this.database.contact[15];
  }

  setLangPP(){
    this.ppFirst = this.database.contact[16];
    this.ppSecond = this.database.contact[17];
    this.ppThird = this.database.contact[18];
    this.hello = this.database.contact[19];
  }

  ValidateEmail(input:string) {

    var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (input.match(validRegex)) {
      this.emailType.nativeElement.setAttribute('style', 'color: #FFFFFFF');
      return true;
  
    } else {
      this.emailType.nativeElement.setAttribute('style', 'color: red');
      return false;
  
    }
  
  }
}
