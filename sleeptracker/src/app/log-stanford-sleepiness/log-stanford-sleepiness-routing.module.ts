import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogStanfordSleepinessPage } from './log-stanford-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: LogStanfordSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogStanfordSleepinessPageRoutingModule {}
