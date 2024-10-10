import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  constructor(){
    this.calcAge();
  }
  database = inject(DatabaseComponent);
  myAge:Number = 0;

  calcAge(){
    var today = new Date();
    var birthDate = new Date('1988-01-27');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
    }
    this.myAge = age;
  }
}
