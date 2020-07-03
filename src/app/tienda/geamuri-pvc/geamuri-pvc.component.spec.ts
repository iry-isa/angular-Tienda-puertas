import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeamuriPVCComponent } from './geamuri-pvc.component';

describe('GeamuriPVCComponent', () => {
  let component: GeamuriPVCComponent;
  let fixture: ComponentFixture<GeamuriPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeamuriPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeamuriPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
