import { Component, inject, Input } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  database = inject(DatabaseComponent);
  @Input() notice:any;

  constructor(){
    setInterval(() => this.notice = this.database.legalNotice, 100);
  }
}
