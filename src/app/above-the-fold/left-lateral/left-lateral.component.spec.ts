import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLateralComponent } from './left-lateral.component';

describe('LeftLateralComponent', () => {
  let component: LeftLateralComponent;
  let fixture: ComponentFixture<LeftLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftLateralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
