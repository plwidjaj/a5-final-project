import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogStanfordSleepinessPageRoutingModule } from './log-stanford-sleepiness-routing.module';

import { LogStanfordSleepinessPage } from './log-stanford-sleepiness.page';
import { HandtrackerComponent } from '../handtracker/handtracker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogStanfordSleepinessPageRoutingModule
  ],
  declarations: [LogStanfordSleepinessPage, HandtrackerComponent]
})
export class LogStanfordSleepinessPageModule {}
