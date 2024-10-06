import { Component, ElementRef, Input, ViewChild, inject, HostListener } from '@angular/core';
import { DatabaseComponent } from '../../database/database.component';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  database = inject(DatabaseComponent);

  @ViewChild('first') first: ElementRef | any;
  @ViewChild('second') second: ElementRef | any;
  @ViewChild('third') third: ElementRef | any;
  @ViewChild('firstImg') firstImg: ElementRef | any;
  @ViewChild('secondImg') secondImg: ElementRef | any;
  @ViewChild('thirdImg') thirdImg: ElementRef | any;
  @ViewChild('firstImgBG') firstImgBG: ElementRef | any;
  @ViewChild('secondImgBG') secondImgBG: ElementRef | any;
  @ViewChild('thirdImgBG') thirdImgBG: ElementRef | any;
  @ViewChild('info') info: ElementRef | any;
  @Input() siteNr: string = '';
  @Input() siteName: string = '';
  @Input() description: any = '';
  @Input() numberOfJSON: number = 0;
  @Input() siteLinksGit: string = '';
  @Input() siteLinksTest: string = '';
  @Input() img: string = '';
  @Input() nextPage: string = '';
  codes: any[] = [];
  screenWidth: number = 1271;
  constructor(){
  
  }

  changeStyleImg(data: string) {
    if (window.innerWidth > 1270) {
      this.changeIMG(data);
    }
  }

  changeIMG(data:string) {
    this.first.nativeElement.setAttribute('style', data == 'first' ? 'display: flex' : 'display: none');
    this.firstImg.nativeElement.setAttribute('style', data == 'first' ? 'display: flex' : 'display: none');
    this.firstImgBG.nativeElement.setAttribute('style', data == 'first' ? 'display: flex' : 'display: none');
    this.second.nativeElement.setAttribute('style', data == 'second' ? 'display: flex' : 'display: none');
    this.secondImg.nativeElement.setAttribute('style', data == 'second' ? 'display: flex' : 'display: none');
    this.secondImgBG.nativeElement.setAttribute('style', data == 'second' ? 'display: flex' : 'display: none');
    this.third.nativeElement.setAttribute('style', data == 'third' ? 'display: flex' : 'display: none');
    this.thirdImg.nativeElement.setAttribute('style', data == 'third' ? 'display: flex' : 'display: none');
    this.thirdImgBG.nativeElement.setAttribute('style', data == 'third' ? 'display: flex' : 'display: none');
  }

  changeStyleImgBack() {
    if (window.innerWidth > 1270) {
      this.changeBackIMG();
    }
  }

  changeBackIMG(){
    this.first.nativeElement.setAttribute('style', 'display: none');
    this.firstImg.nativeElement.setAttribute('style', 'display: none');
    this.firstImgBG.nativeElement.setAttribute('style', 'display: none');
    this.second.nativeElement.setAttribute('style', 'display: none');
    this.secondImg.nativeElement.setAttribute('style', 'display: none');
    this.secondImgBG.nativeElement.setAttribute('style', 'display: none');
    this.third.nativeElement.setAttribute('style', 'display: none');
    this.thirdImg.nativeElement.setAttribute('style', 'display: none');
    this.thirdImgBG.nativeElement.setAttribute('style', 'display: none');
  }

  openInfo(data: string) {
    let number = 0;
    this.info.nativeElement.setAttribute('style', 'display: flex');
    if (data == 'first') {
      number = 0;
      this.codes = [3, 4, 1, 0, 2];
      this.nextPage = 'second';
    } else if (data == 'second') {
      number = 1;
      this.codes = [1, 0, 5];
      this.nextPage = 'third';
    } else if (data == 'third') {
      number = 2;
      this.codes = [1, 0, 5];
      this.nextPage = 'first';
    }

    this.loadSite(number);
  }

  async loadSite(number: number) {
    this.numberOfJSON = number;
    let sitenumber = number + 1
    this.siteNr = '0' + sitenumber;
    this.siteName = this.database.sites[0].name[number];
    this.description = this.database.sites[0].description[number];
    this.siteLinksGit = this.database.sites[0].siteLinksGit[number];
    this.siteLinksTest = this.database.sites[0].siteLinksTest[number];
    this.img = this.database.sites[0].img[number];
    console.log(this.database.sites);
  }

  closeInfo() {
    this.info.nativeElement.setAttribute('style', 'display: none');
  }

  onEvent(event: any): void {
    event.stopPropagation();
  }
}
