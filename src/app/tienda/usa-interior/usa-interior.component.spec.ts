import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaInteriorComponent } from './usa-interior.component';

describe('UsaInteriorComponent', () => {
  let component: UsaInteriorComponent;
  let fixture: ComponentFixture<UsaInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
