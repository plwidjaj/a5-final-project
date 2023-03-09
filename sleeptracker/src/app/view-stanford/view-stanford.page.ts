import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-view-stanford',
  templateUrl: './view-stanford.page.html',
  styleUrls: ['./view-stanford.page.scss'],
})
export class ViewStanfordPage implements OnInit {
  data;

  constructor() {
    SleepService.AllSleepinessData.sort((a, b) =>
    a.getLoggedTime().getDate() - b.getLoggedTime().getDate()
  );

    SleepService.AllSleepinessData.sort((a, b) =>
    a.getLoggedTime().getMonth() - b.getLoggedTime().getMonth()
  );

    SleepService.AllSleepinessData.sort((a, b) =>
    a.getLoggedTime().getTime() - b.getLoggedTime().getTime()
    );

    this.data = SleepService.AllSleepinessData.reverse();

    console.log(this.data);

   }

  ngOnInit() {
  }

}
