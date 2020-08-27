import { Component, Input, OnInit, Output } from '@angular/core';
import { TimerService } from '../../../core/services/timer/timer.service';
import { timer } from 'rxjs';
import { scan, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {

  // public counter = 5;
  public countDown;
  // public condition = this.counter === 3 ? alert('mfrfer') : '';

  constructor(private myService: TimerService) {
  }

  ngOnInit(): void {
    // this.countDown = this.myService.getCounter().do(() => --this.counter);
    this.countDown = this.myService.getCounter();
  }

  public handleTimerEnd(): void {
    alert('JOJ');
  }
}
