import { Component, inject } from '@angular/core';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";
import { DatabaseComponent } from '../../database/database.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-myinfos',
  standalone: true,
  imports: [NgxFastMarqueeModule, NgClass],
  templateUrl: './myinfos.component.html',
  styleUrl: './myinfos.component.scss'
})

export class MyinfosComponent {

  database = inject(DatabaseComponent);

  constructor(){}
}