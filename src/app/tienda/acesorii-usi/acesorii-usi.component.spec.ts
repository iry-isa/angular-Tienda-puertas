import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcesoriiUsiComponent } from './acesorii-usi.component';

describe('AcesoriiUsiComponent', () => {
  let component: AcesoriiUsiComponent;
  let fixture: ComponentFixture<AcesoriiUsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcesoriiUsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcesoriiUsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
