import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../../above-the-fold/above-the-fold.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AboveTheFoldComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
