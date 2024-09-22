import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HeadlineComponent } from './headline/headline.component';
import { LeftLateralComponent } from './left-lateral/left-lateral.component';
import { RightLateralComponent } from './right-lateral/right-lateral.component';
import { MyinfosComponent } from './myinfos/myinfos.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [NavComponent, HeadlineComponent, LeftLateralComponent, RightLateralComponent, MyinfosComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
