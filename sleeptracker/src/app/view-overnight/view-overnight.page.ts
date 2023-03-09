import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-view-overnight',
  templateUrl: './view-overnight.page.html',
  styleUrls: ['./view-overnight.page.scss'],
})
export class ViewOvernightPage implements OnInit {
  data



  constructor(private sleepService:SleepService) { 
    SleepService.AllOvernightData.sort((a, b) =>
      a.getStart().getDate() - b.getStart().getDate()
    );
    SleepService.AllOvernightData.sort((a, b) =>
    a.getStart().getMonth() - b.getStart().getMonth()
  );
    this.data = SleepService.AllOvernightData.reverse()

  }

  ngOnInit() {
  }

}
