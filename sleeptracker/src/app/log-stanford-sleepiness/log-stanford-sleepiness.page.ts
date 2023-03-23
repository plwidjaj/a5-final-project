import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { PredictionEvent } from '../prediction-event';



@Component({
  selector: 'app-log-stanford-sleepiness',
  templateUrl: './log-stanford-sleepiness.page.html',
  styleUrls: ['./log-stanford-sleepiness.page.scss'],
})
export class LogStanfordSleepinessPage implements OnInit {
  loggedValue:string;
  gesture: String = "";
  answer: String= ""

  constructor(private sleepService: SleepService, private alertController: AlertController) { }

  ngOnInit() {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction()

      if (this.gesture == "Closed Hand") {
        this.answer = "2"
      }
    
      if (this.gesture == "Open Hand") {
        this.answer = "5"
      }

      if (this.gesture == "Hand Pointing") {
        this.answer = "1"
      }

      if (this.gesture == "Two Hands Pointing") {
        this.answer = "4"
      }

      if (this.gesture == "Two Closed Hands") {
        this.answer = "3"
      }

      if (this.gesture == "One Closed One Open") {
        this.answer = "6"
      }

      if (this.gesture == "One Closed One Pointing") {
        this.answer = "7"
      }

  }

  



  async confirm() {

    const data = new StanfordSleepinessData(Number(this.answer));
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
