import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPipe } from './pipes/timer/timer.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaginationPipe,
    PaginationComponent,
    TimerPipe,
    TimerComponent
  ],
  exports: [
    PaginationComponent,
    PaginationPipe,
    TimerPipe,
    TimerComponent
  ]
})

export class SharedModule {
}
