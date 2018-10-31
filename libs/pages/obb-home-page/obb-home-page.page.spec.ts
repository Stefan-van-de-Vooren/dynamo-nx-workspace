import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObbHomePagePage } from './obb-home-page.page';

describe('ObbHomePagePage', () => {
  let component: ObbHomePagePage;
  let fixture: ComponentFixture<ObbHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObbHomePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObbHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
