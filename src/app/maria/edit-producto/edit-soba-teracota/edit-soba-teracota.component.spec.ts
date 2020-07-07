import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSobaTeracotaComponent } from './edit-soba-teracota.component';

describe('EditSobaTeracotaComponent', () => {
  let component: EditSobaTeracotaComponent;
  let fixture: ComponentFixture<EditSobaTeracotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSobaTeracotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSobaTeracotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
