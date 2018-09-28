import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMainComponent } from './p-main.component';

describe('PMainComponent', () => {
  let component: PMainComponent;
  let fixture: ComponentFixture<PMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
