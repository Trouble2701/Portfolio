import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  back(){
    history.back();
  }
}
