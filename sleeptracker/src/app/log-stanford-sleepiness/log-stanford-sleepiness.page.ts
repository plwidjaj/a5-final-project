import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';


@Component({
  selector: 'app-log-stanford-sleepiness',
  templateUrl: './log-stanford-sleepiness.page.html',
  styleUrls: ['./log-stanford-sleepiness.page.scss'],
})
export class LogStanfordSleepinessPage implements OnInit {
  loggedValue:string;

  constructor(private sleepService: SleepService, private alertController: AlertController) { }

  ngOnInit() {
  }


  async confirm() {

    const data = new StanfordSleepinessData(Number(this.loggedValue));
    this.sleepService.logSleepinessData(data);
    console.log(data);
    
    const alert = await this.alertController.create({
      header: "Success!",
      message: "You have successfully logged your sleepiness!",
      buttons: ['Ok']
    })
    alert.present();
  }

}
