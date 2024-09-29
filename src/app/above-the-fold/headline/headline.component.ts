import { Component, inject, Input, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {
  database = inject(DatabaseComponent);

  @Input() frontend: any;
  @Input() marqueeOpen:any;
  @Input() marqueeClose:any;
  @Input() workLang:any;

  contactLang:any;

  constructor(private sanitizer: DomSanitizer){
    setInterval(() => this.setLang(), 100);
  }

  setLang(){
    this.frontend = this.database.frontend;
  }
}
