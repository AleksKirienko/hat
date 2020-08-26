import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../core/services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {

  public countDown;
  public counter = 10;

  constructor(private myService: TimerService) {
  }

  ngOnInit(): void {
    // this.countDown = this.myService.getCounter().do(() => --this.counter);
    this.countDown = this.myService.getCounter();
  }
}
