import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLateralComponent } from './right-lateral.component';

describe('RightLateralComponent', () => {
  let component: RightLateralComponent;
  let fixture: ComponentFixture<RightLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightLateralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
