import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaExteriorComponent } from './usa-exterior.component';

describe('UsaExteriorComponent', () => {
  let component: UsaExteriorComponent;
  let fixture: ComponentFixture<UsaExteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaExteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
