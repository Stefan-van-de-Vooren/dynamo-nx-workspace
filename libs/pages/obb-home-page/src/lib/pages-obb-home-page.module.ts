import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { ObbHomePageComponent } from "./obb-home-page/obb-home-page.component";

export const pagesObbHomePageRoutes: Route[] = [];
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ObbHomePageComponent]
})
export class PagesObbHomePageModule {}
