import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  pname:string = 'Your name goes here';
  pemail:string = 'youremail@email.com';
  phelp:string = 'Hello Sven, i am intrested in..';
  name:string = '';
  email:string = '';
  help:string = '';
  checkBox:boolean = false;
  dataCheck:boolean = true;
  @ViewChild('accept') accept: ElementRef | any;
  @ViewChild('nameType') nameType: ElementRef | any;
  @ViewChild('emailType') emailType: ElementRef | any;
  @ViewChild('helpType') helpType: ElementRef | any;

  sendMail(name:string, email:string, help:string, checkBox:any){
    if(!name){
      this.nameType.nativeElement.setAttribute('placeholder', 'Oops! it seems your name is missing');
      this.setClass(name);
    }
    if(!email) {
      this.emailType.nativeElement.setAttribute('placeholder', 'Hoppla! your email is required');
      this.setClass(email);
    }
    if(!help){
      this.helpType.nativeElement.setAttribute('placeholder', 'What do you need to develop?');
      this.setClass(help);
    }
    if(!checkBox){
      this.accept.nativeElement.setAttribute('style', 'display: flex');
    }else{
      this.accept.nativeElement.setAttribute('style', 'display: none');
    }
  }

  setClass(data:string){
    if(!data){
      this.dataCheck = false;
    }else{
      this.dataCheck = true;
    }
  }
}
