import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegulationsComponent } from './pages/regulations/regulations.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'rules', component: RegulationsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
