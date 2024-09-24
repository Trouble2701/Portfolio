import { Component, inject, Input } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

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

  constructor(){
    setInterval(() => this.frontend = this.database.frontend, 100);
  }
}
