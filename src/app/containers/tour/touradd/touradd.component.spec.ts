import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouraddComponent } from './touradd.component';

describe('TouraddComponent', () => {
  let component: TouraddComponent;
  let fixture: ComponentFixture<TouraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
