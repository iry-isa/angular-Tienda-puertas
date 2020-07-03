import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiPVCComponent } from './usi-pvc.component';

describe('UsiPVCComponent', () => {
  let component: UsiPVCComponent;
  let fixture: ComponentFixture<UsiPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsiPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsiPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
