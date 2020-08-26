import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game/game.service';
import { TimerService } from './services/timer/timer.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GameService,
    TimerService
  ]
})
export class CoreModule {
  // Проверка импортирован CoreModule или нет
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
