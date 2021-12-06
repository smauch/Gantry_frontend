import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyChocolateComponent } from './enjoy-chocolate.component';

describe('EnjoyChocolateComponent', () => {
  let component: EnjoyChocolateComponent;
  let fixture: ComponentFixture<EnjoyChocolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoyChocolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoyChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
