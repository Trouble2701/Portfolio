import { Component, inject } from '@angular/core';
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
}
