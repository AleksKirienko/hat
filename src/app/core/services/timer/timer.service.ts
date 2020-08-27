import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { take, map, scan, takeWhile } from 'rxjs/operators';

@Injectable()
export class TimerService {

  public counter = 60;
  public tick = 1000;

  // tslint:disable-next-line:typedef
  public getCounter() {
    return timer(0, this.tick).pipe(
      scan(acc => --acc, this.counter),
      takeWhile(x => x >= 0)
    );
    // return timer(0, this.tick).pipe(take(this.counter));
    // return timer(0, this.tick).take(this.counter).map(() => --this.counter);
  }
}
