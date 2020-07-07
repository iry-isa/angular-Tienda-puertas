import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPuertaPvcComponent } from './edit-puerta-pvc.component';

describe('EditPuertaPvcComponent', () => {
  let component: EditPuertaPvcComponent;
  let fixture: ComponentFixture<EditPuertaPvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPuertaPvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPuertaPvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
