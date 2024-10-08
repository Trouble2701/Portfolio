import { NgClass } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, inject, Injectable } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DatabaseComponent } from '../../database/database.component';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
@Injectable({ providedIn: 'root' })

export class ContactComponent {

  http = inject(HttpClient);
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
  @Input() whatsEmail: any;
  @Input() whatsHelp: any;
  @Input() ppFirst: any;
  @Input() ppSecond: any;
  @Input() ppThird: any;
  @Input() hello: any;
  @Input() mailIsSending: any;
  nameFailed: any;
  emailFailed: any;
  helpFailed: any;
  acceptFailed: any;
  checkBox: boolean = false;
  @ViewChild('accept') accept: ElementRef | any;
  @ViewChild('nameType') nameType: ElementRef | any;
  @ViewChild('email') emailType: ElementRef | any;
  @ViewChild('messageType') messageType: ElementRef | any;
  @ViewChild('send') send: ElementRef | any;
  @ViewChild('buttonActiv') buttonActiv: ElementRef | any;
  @ViewChild('checkBoxCheck') checkBoxCheck: ElementRef | any;

  typeName: boolean = false;
  typeEmail: boolean = false;
  typeMessage: boolean = false;
  clickCheckBox: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  mailTest = false;

  post = {
    endPoint: 'https://sven-plankenbichler.de/sendmail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor() {
    setInterval(() => {
      this.setLang();
      this.setLangFaild();
      this.setLangPP();
      this.checkInput();
    }, 100);
  }

  checkInput() {
    if (this.typeName && this.typeEmail && this.typeMessage && this.checkBoxCheck.nativeElement.checked) {
      this.buttonActiv.nativeElement.setAttribute('disable', false);
    } else {
      this.buttonActiv.nativeElement.setAttribute('disable', true);
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

  setLangPP() {
    this.ppFirst = this.database.contact[16];
    this.ppSecond = this.database.contact[17];
    this.ppThird = this.database.contact[18];
    this.hello = this.database.contact[19];
    this.mailIsSending = this.database.contact[20];
  }

  ValidateEmail(input: string) {

    var validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.match(validRegex)) {
      this.emailType.nativeElement.setAttribute('style', 'border: 1px solid rgb(5, 155, 0); color: rgb(5, 155, 0)');
      this.typeEmail = true;
      return true;

    } else {
      this.emailType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
      return false;

    }

  }

  ValidateName(input: string) {

    var validRegex = /^[a-zA-Z0-9._%+\-]{3,}/;

    if (input.match(validRegex)) {
      this.nameType.nativeElement.setAttribute('style', 'border: 1px solid rgb(5, 155, 0); color: rgb(5, 155, 0)');
      this.typeName = true;
      return true;

    } else {
      this.nameType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
      return false;

    }

  }

  ValidateMessage(input: string) {

    var validRegex = /^[a-zA-Z0-9._%+\-]{4,}/;

    if (input.match(validRegex)) {
      this.messageType.nativeElement.setAttribute('style', 'border: 1px solid rgb(5, 155, 0); color: rgb(5, 155, 0)');
      this.typeMessage = true;
      return true;

    } else {
      this.messageType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
      return false;

    }

  }

  checkName() {
    if (!this.typeName) {
      this.nameType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
    } else {
      this.nameType.nativeElement.setAttribute('style', 'border: 0');
    }
  }

  checkEmail() {
    if (!this.typeEmail) {
      this.emailType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
    } else {
      this.emailType.nativeElement.setAttribute('style', 'border: 0');
    }
  }

  checkMessage() {
    if (!this.typeMessage) {
      this.messageType.nativeElement.setAttribute('style', 'border: 1px dotted rgb(170, 0, 0); color:rgb(170, 0, 0)');
    } else {
      this.messageType.nativeElement.setAttribute('style', 'border: 0');
    }
  }

  checkAccept() {
    if (!this.checkBoxCheck.nativeElement.checked) {
      this.accept.nativeElement.setAttribute('style', 'display:flex');
    } else {
      this.accept.nativeElement.setAttribute('style', 'display:none');
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checkBoxCheck.nativeElement.checked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendingMessage();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && this.checkBoxCheck.nativeElement.checked && ngForm.form.valid && this.mailTest) {
      this.sendingMessage();
      ngForm.resetForm();
    } else {
      this.checkData();
    }
  }

  checkData() {
    this.checkName();
    this.checkEmail();
    this.checkMessage();
    this.checkAccept();
  }

  sendingMessage() {
    this.emailType.nativeElement.setAttribute('style', 'border: 0');
    this.nameType.nativeElement.setAttribute('style', 'border: 0');
    this.messageType.nativeElement.setAttribute('style', 'border: 0');
    this.checkBoxCheck.nativeElement.checked = false;
    this.accept.nativeElement.setAttribute('style', 'display:none');
    this.send.nativeElement.setAttribute('style', 'display:flex');
    setTimeout(() => this.send.nativeElement.setAttribute('style', 'display:none'), 2000);
  }
}
