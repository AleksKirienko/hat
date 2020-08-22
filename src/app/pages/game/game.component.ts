import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../core/game/game.service';
import { GameItem } from '../../core/models/game-item';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  words: GameItem[] = [];

  private subs: Subscription = new Subscription();

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.loadTopHeadlines();
  }

  // Отписываемся от всех подписок разом, когда компонент уничтожается
  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  private loadTopHeadlines() {
    // Добавляем запрос в subs, чтобы в будущем можно было отписаться от него
    this.subs.add(this.gameService.getData().subscribe(gameItem => {
      console.log(gameItem);
      this.words = gameItem;
    }));
  }

}
