import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewStanfordPage } from './view-stanford.page';

const routes: Routes = [
  {
    path: '',
    component: ViewStanfordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewStanfordPageRoutingModule {}
