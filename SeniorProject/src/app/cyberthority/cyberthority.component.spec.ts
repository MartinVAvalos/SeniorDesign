import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberthorityComponent } from './cyberthority.component';

describe('CyberthorityComponent', () => {
  let component: CyberthorityComponent;
  let fixture: ComponentFixture<CyberthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
