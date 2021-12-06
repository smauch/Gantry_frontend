import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselChocolateComponent } from './carousel-chocolate.component';

describe('CarouselChocolateComponent', () => {
  let component: CarouselChocolateComponent;
  let fixture: ComponentFixture<CarouselChocolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselChocolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
