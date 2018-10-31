import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObbHomePagePage } from './obb-home-page.page';

const routes: Routes = [
  {
    path: '',
    component: ObbHomePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObbHomePagePage]
})
export class ObbHomePagePageModule {}
