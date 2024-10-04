import { Component, inject } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  database = inject(DatabaseComponent);
}
