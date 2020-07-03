import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiInteriorComponent } from './usi-interior.component';

describe('UsiInteriorComponent', () => {
  let component: UsiInteriorComponent;
  let fixture: ComponentFixture<UsiInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsiInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsiInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
