import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobeTeracotaComponent } from './sobe-teracota.component';

describe('SobeTeracotaComponent', () => {
  let component: SobeTeracotaComponent;
  let fixture: ComponentFixture<SobeTeracotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobeTeracotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobeTeracotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
