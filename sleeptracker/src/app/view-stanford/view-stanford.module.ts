import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewStanfordPageRoutingModule } from './view-stanford-routing.module';

import { ViewStanfordPage } from './view-stanford.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewStanfordPageRoutingModule
  ],
  declarations: [ViewStanfordPage]
})
export class ViewStanfordPageModule {}
