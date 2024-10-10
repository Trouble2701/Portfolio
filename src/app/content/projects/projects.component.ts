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
  @ViewChild('siteImg') siteImg: ElementRef | any;
  @ViewChild('closeWidth') closeWidth: ElementRef | any;
  @ViewChild('closeHeight') closeHeight: ElementRef | any;
  @ViewChild('siteRigth') siteRigth: ElementRef | any;
  @ViewChild('siteLeft') siteLeft: ElementRef | any;
  @ViewChild('showInfo') showInfo: ElementRef | any;
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
  constructor() {
    setInterval(() => this.checkWidth(), 100);
  }

  checkWidth() {
    if (window.innerWidth > window.innerHeight) {
      this.changeCloseTag('flex', 'none');
      this.highWidthHeight();
    } else if (window.innerWidth < window.innerHeight) {
      this.smalWidth();
    }
  }

  highWidthHeight() {
    if (window.innerHeight > 800) {
      this.highWidth();
    } else if (window.innerHeight < 560) {
      this.changeAttribute('height: 470px', 'display:flex;height: 80%', 'display: flex; width: unset; height: 216px', 'height: 85%; padding: 20px');
    } else if (window.innerHeight >= 542 && window.innerHeight < 801) {
      this.changeAttribute('height: 470px', 'display:flex;height: 470px', 'display: flex; width: unset; height: 216px', 'height: 80%; padding: 40px');
    }
  }

  highWidth() {
    if (window.innerWidth > 1300 && window.innerHeight > 860) {
      this.changeAttribute('height: 555px', 'display:flex;height: 555px', 'display: flex; width: unset; height: 300px', 'height: 500px; width: 1095px');
    } else if (window.innerWidth <= 1300 && window.innerHeight > 860) {
      this.changeAttribute('height: 470px', 'display:flex;height: 470px', 'display: flex; width: unset; height: 216px', 'height: 80%; width: 470px')
    } else if (window.innerWidth <= 1300 && window.innerHeight < 861) {
      this.changeAttribute('height: 470px', 'display:flex; height: 470px', 'display: flex; position: absolute; right: 20px; top: 20px', 'height: 80%; width: 72%; padding: 20px')
    } else if (window.innerWidth > 1300 && window.innerHeight < 861) {
      this.changeAttribute('height: 555px', 'display:flex; height: 555px', 'display: flex; width: unset; height: 216px', 'height: 80%; width: 1095; padding: 20px')
    }
  }

  smalWidth() {
    if (window.innerHeight > 955) {
      this.heightBig()
    } else if (window.innerHeight <= 955) {
      this.heightSmal();
      this.changeCloseTag('none', 'flex');
    }
  }

  heightBig() {
    this.highHeight();
    window.innerHeight > 985 ? this.changeCloseTag('flex', 'none') : this.changeCloseTag('none', 'flex');
    this.showInfo.nativeElement.setAttribute('style', 'width: 85%; padding: 20px');
    if (window.innerWidth < 480 && window.innerWidth > 409) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 216px; position: absolute; right: 10px; top: 10px');
    } else if (window.innerWidth < 410) {
      this.siteImg.nativeElement.setAttribute('style', 'display:flex; height: 160px');
      this.showInfo.nativeElement.setAttribute('style', 'width: 80%; padding: 20px');
    } else {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 300px');
    }
  }

  heightSmal() {
    if (window.innerWidth > 700 && window.innerWidth < 990) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 160px; position: absolute; right: 20px; top: 20px');
      this.showInfo.nativeElement.setAttribute('style', 'width: 470px; padding: 20px');
    } else if (window.innerWidth < 700 && window.innerWidth > 400) {
      this.showInfo.nativeElement.setAttribute('style', 'width: 85%; padding: 20px');
      this.imgSmalHeight();
    } else if (window.innerWidth < 400) {
      this.showInfo.nativeElement.setAttribute('style', 'width: 85%; padding: 20px');
      this.widthSmal();
    }
    this.siteLeft.nativeElement.setAttribute('style', innerHeight < 900 ? 'height: 100%' : 'height: 80%');
  }

  widthSmal() {
    if (window.innerHeight < 700) {
      if (window.innerWidth < 400) {
        this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 100px; position: absolute; right: 10px; top: 10px');
      } else {
        this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 100px; position: absolute; right: 20px; top: 20px');
      }
    } else {
      if (window.innerWidth < 400) {
        this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 100px; position: absolute; right: 0; top: 0');
        this.siteRigth.nativeElement.setAttribute('style', 'display: flex; height: 130px');
      } else {
        this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 190px');
      }
    }
  }

  imgSmalHeight() {
    if (window.innerWidth > 450) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 190px; position: absolute; right: 20px; top: 20px');
    } else if (window.innerWidth < 450) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 100px; position: absolute; right: 20px; top: 20px');
    } else if (window.innerWidth < 375) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 80px; position: absolute; right: 20px; top: 20px');
    }
  }

  highHeight() {
    this.siteLeft.nativeElement.setAttribute('style', 'height: 540px');
    this.siteRigth.nativeElement.setAttribute('style', 'display: flex');
    if (window.innerHeight > 990 && window.innerWidth > 700 && window.innerWidth < 990) {
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 216px');
      this.showInfo.nativeElement.setAttribute('style', 'width: 470px; padding: 20px');
    } else if (window.innerHeight > 990 && window.innerWidth < 700 && window.innerWidth > 400) {
      this.showInfo.nativeElement.setAttribute('style', 'width: 85%; padding: 20px');
      this.imgSmalHeight();
    } else if (window.innerHeight < 990 && window.innerWidth < 400) {
      this.showInfo.nativeElement.setAttribute('style', 'width: 85%; padding: 20px');
      this.siteImg.nativeElement.setAttribute('style', 'display: flex; height: 190px');
    }
  }

  changeAttribute(left: string, right: string, img: string, info: string) {
    this.siteLeft.nativeElement.setAttribute('style', left);
    this.siteRigth.nativeElement.setAttribute('style', right);
    this.siteImg.nativeElement.setAttribute('style', img);
    this.showInfo.nativeElement.setAttribute('style', info);
  }

  changeCloseTag(closeW: string, closeH: string) {
    this.closeWidth.nativeElement.setAttribute('style', 'display:' + closeW + '');
    this.closeHeight.nativeElement.setAttribute('style', 'display:' + closeH + '');
  }

  changeStyleImg(data: string) {
    if (window.innerWidth > 1270) {
      this.changeIMG(data);
    }
  }

  changeIMG(data: string) {
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

  changeBackIMG() {
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
    document.documentElement.style.overflowY = 'hidden';
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
    document.documentElement.style.overflowY = '';
    this.info.nativeElement.setAttribute('style', 'display: none');
  }

  onEvent(event: any): void {
    event.stopPropagation();
  }
}
