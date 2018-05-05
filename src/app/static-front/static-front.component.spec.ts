import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFrontComponent } from './static-front.component';

describe('StaticFrontComponent', () => {
  let component: StaticFrontComponent;
  let fixture: ComponentFixture<StaticFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
