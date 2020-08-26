import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class TimerService {
  public counter = 61;
  public tick = 1000;

  // tslint:disable-next-line:typedef
  public getCounter() {
    return timer(0, this.tick).pipe(take(this.counter));
    // return timer(0, this.tick).take(this.counter).map(() => --this.counter);
  }
}
