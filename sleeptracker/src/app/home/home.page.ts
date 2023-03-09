import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService, public navCtrl: NavController) {}

	ngOnInit() {
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	openLogOvernightSleep() {
		this.navCtrl.navigateForward('/log-overnight-sleep');
	  }
	
	openLogStanfordSleepiness() {
		this.navCtrl.navigateForward('/log-stanford-sleepiness');
	}

	openViewOvernight() {
		this.navCtrl.navigateForward('/view-overnight');
	}

	openViewStanford() {
		this.navCtrl.navigateForward('/view-stanford');
	}

}
