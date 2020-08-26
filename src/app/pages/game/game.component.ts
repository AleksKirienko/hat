import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../core/services/game/game.service';
import { GameItem } from '../../core/models/game-item';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit, OnDestroy {

  words: GameItem[] = [];

  private subs: Subscription = new Subscription();

  constructor(private gameService: GameService) {
  }

  public ngOnInit(): void {
    this.loadTopHeadlines();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  private loadTopHeadlines() {
    // Добавляем запрос в subs, чтобы в будущем можно было отписаться от него
    this.subs.add(this.gameService.getWords().subscribe(gameItem => {
      console.log(gameItem);
      // @ts-ignore
      this.words = gameItem;
    }));
  }

}
