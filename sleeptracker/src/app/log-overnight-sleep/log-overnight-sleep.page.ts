import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';



@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: './log-overnight-sleep.page.html',
  styleUrls: ['./log-overnight-sleep.page.scss'],
})
export class LogOvernightSleepPage implements OnInit {
  startDate:string;
  minDate;
  endDate:string;
  currentDate = new Date().toISOString

  constructor(private sleepService: SleepService,private alertController: AlertController) { 

    if (typeof this.startDate === 'string') {
      this.minDate = this.startDate.slice(0,-6)
    }

  }



  async confirm() {
    console.log(this.startDate.slice(0,-5))
    let newStart = new Date(this.startDate)
    let newEnd = new Date(this.endDate)
    const data = new OvernightSleepData(newStart, newEnd);
    
    const alert = await this.alertController.create({
      header: "Success!",
      message: "You have successfully logged your hours!",
      buttons: ['Ok']
    })
    
    this.sleepService.logOvernightData(data)
    alert.present();

  }

  ngOnInit() {
  }



}
