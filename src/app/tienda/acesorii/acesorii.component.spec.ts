import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcesoriiComponent } from './acesorii.component';

describe('AcesoriiComponent', () => {
  let component: AcesoriiComponent;
  let fixture: ComponentFixture<AcesoriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcesoriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcesoriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
