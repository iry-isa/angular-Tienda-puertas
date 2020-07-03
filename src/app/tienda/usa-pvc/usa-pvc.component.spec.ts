import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaPVCComponent } from './usa-pvc.component';

describe('UsaPVCComponent', () => {
  let component: UsaPVCComponent;
  let fixture: ComponentFixture<UsaPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
