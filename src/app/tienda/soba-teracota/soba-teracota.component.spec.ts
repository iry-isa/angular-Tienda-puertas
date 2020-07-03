import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobaTeracotaComponent } from './soba-teracota.component';

describe('SobaTeracotaComponent', () => {
  let component: SobaTeracotaComponent;
  let fixture: ComponentFixture<SobaTeracotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobaTeracotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobaTeracotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
