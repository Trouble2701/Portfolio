import { Component, inject } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  database = inject(DatabaseComponent);

}
