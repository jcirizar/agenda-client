import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePhoneComponent } from './name-phone.component';

describe('NamePhoneComponent', () => {
  let component: NamePhoneComponent;
  let fixture: ComponentFixture<NamePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
