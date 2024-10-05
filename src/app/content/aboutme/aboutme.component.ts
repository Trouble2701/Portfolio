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

  database = inject(DatabaseComponent);

  @ViewChild('ImgBG') ImgBG: ElementRef | any;
  changeStyleImg(){
    this.ImgBG.nativeElement.setAttribute('style', 'display: flex');
  }

  changeStyleImgBack(){
    this.ImgBG.nativeElement.setAttribute('style', 'display: none');
  }
}
