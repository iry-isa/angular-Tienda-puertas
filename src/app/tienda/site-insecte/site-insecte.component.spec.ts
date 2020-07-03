import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInsecteComponent } from './site-insecte.component';

describe('SiteInsecteComponent', () => {
  let component: SiteInsecteComponent;
  let fixture: ComponentFixture<SiteInsecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteInsecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInsecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
