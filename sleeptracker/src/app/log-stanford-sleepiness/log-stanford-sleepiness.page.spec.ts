import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogStanfordSleepinessPage } from './log-stanford-sleepiness.page';

describe('LogStanfordSleepinessPage', () => {
  let component: LogStanfordSleepinessPage;
  let fixture: ComponentFixture<LogStanfordSleepinessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogStanfordSleepinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogStanfordSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
