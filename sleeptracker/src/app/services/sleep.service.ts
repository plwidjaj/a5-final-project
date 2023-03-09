import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];



	constructor(private storage: Storage) {
		this.init();
		this.loadDataFromStorage()
		SleepService.AllOvernightData.sort((a, b) =>
		a.getStart().getDate() - b.getStart().getDate()
	  );
	  	SleepService.AllOvernightData.sort((a, b) =>
	  a.getStart().getMonth() - b.getStart().getMonth()
		);
		SleepService.AllSleepinessData.sort((a, b) =>
		a.getLoggedTime().getDate() - b.getLoggedTime().getDate()
	  );
	  SleepService.AllSleepinessData.sort((a, b) =>
	  a.getLoggedTime().getMonth() - b.getLoggedTime().getMonth()
	);
		// if(SleepService.LoadDefaultData) {
		// 	this.addDefaultData();
		// SleepService.LoadDefaultData = false;
		// }
		
		console.log("Loading in: ", SleepService.AllSleepinessData);
		console.log("Loading in: ", SleepService.AllOvernightData);


	}

	init() {
		this.storage.create();
	}


	// private addDefaultData() {
	// 	this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
	// 	this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
	// 	this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	// }

	public async logOvernightData(sleepData:OvernightSleepData) {
		let value = sleepData.getStartEnd();
		console.log("VALUE: ", value)
		let index = SleepService.AllOvernightData.length.toString();
		let key = index.toString() + " o";
		console.log("KEY: ", key)
		this.storage.set(key, value);

		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);


		console.log("Just Logged Data: ", SleepService.AllOvernightData)
	}

	public async logSleepinessData(sleepData:StanfordSleepinessData) {
		let value = sleepData.getLoggedValue().toString() + "," + sleepData.getLoggedTime().toString()
		console.log("VALUE: ", value)
		let index = SleepService.AllSleepinessData.length.toString();
		let key = index.toString() + " s"
		console.log("KEY: ", key)
		this.storage.set(key, value);
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		console.log("Just Logged Data: ", SleepService.AllSleepinessData)
	}


	private async loadDataFromStorage() {
		this.storage.forEach((k,v) => {
			if (v.includes("o")) {
				console.log(v)
				console.log(k)
				console.log("isOVernight")
				let start = new Date(k.split(",")[0])
				console.log("START: ", start)
				let end = new Date(k.split(",")[1])
				let data = new OvernightSleepData(start, end)
				SleepService.AllOvernightData.push(data)
				SleepService.AllSleepData.push(data)
			}

			else {
				console.log(v)
				console.log(k)
				console.log("isSleepiness")
				let loggedAt = new Date(k.split(",")[1])
				let loggedValue = Number(k.split(",")[0])
				let data = new StanfordSleepinessData(loggedValue, loggedAt)
				SleepService.AllSleepinessData.push(data)
				SleepService.AllSleepData.push(data)
			}
		


		})
	}
}
