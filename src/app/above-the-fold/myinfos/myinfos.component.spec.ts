import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinfosComponent } from './myinfos.component';

describe('MyinfosComponent', () => {
  let component: MyinfosComponent;
  let fixture: ComponentFixture<MyinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyinfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
