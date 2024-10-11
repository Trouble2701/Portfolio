import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  database = inject(DatabaseComponent);
  @Input() notice: any;
  @ViewChild('github') github: ElementRef | any;
  @ViewChild('link') link: ElementRef | any;
  @ViewChild('email') email: ElementRef | any;
  @ViewChild('imprint') imprint: ElementRef | any;

  constructor(private router: Router) {
    setInterval(() => this.notice = this.database.legalNotice, 100);
  }

  top() {
    window.scrollTo({
      top: 0,
    });
    this.router.navigate(['/']);
  }

  showDot(data:string){
    this.github.nativeElement.setAttribute('style', data == 'github' ? 'background-color: #3DCFB6' : 'background-color: transparent');
    this.link.nativeElement.setAttribute('style', data == 'link' ? 'background-color: #3DCFB6' : 'background-color: transparent');
    this.email.nativeElement.setAttribute('style', data == 'email' ? 'background-color: #3DCFB6' : 'background-color: transparent');
    this.imprint.nativeElement.setAttribute('style', data == 'imprint' ? 'background-color: #3DCFB6' : 'background-color: transparent');
  }

  showDontDot(){
    this.github.nativeElement.setAttribute('style', 'background-color: transparent');
    this.link.nativeElement.setAttribute('style', 'background-color: transparent');
    this.email.nativeElement.setAttribute('style', 'background-color: transparent');
    this.imprint.nativeElement.setAttribute('style', 'background-color: transparent');
  }

  imprintOpen(){
    this.router.navigate(['/imprint']);
  }
}
