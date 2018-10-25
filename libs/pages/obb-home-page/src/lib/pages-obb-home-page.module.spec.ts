import { async, TestBed } from "@angular/core/testing";
import { PagesObbHomePageModule } from "./pages-obb-home-page.module";

describe("PagesObbHomePageModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesObbHomePageModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(PagesObbHomePageModule).toBeDefined();
  });
});
