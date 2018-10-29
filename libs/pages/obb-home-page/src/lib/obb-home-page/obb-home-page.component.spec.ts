import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ObbHomePageComponent } from "./obb-home-page.component";

describe("ObbHomePageComponent", () => {
  let component: ObbHomePageComponent;
  let fixture: ComponentFixture<ObbHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObbHomePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObbHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
