import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegulationsComponent } from './pages/regulations/regulations.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegulationsComponent,
    NotFoundComponent,
    MainPageComponent,
    GameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
