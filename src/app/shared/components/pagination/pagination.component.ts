import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public allItems: number;
  public pageSize = 100;
  public active = 0;
  public pages: number[];

  constructor() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  public ngOnInit(): void {
    // tslint:disable-next-line:no-console
    console.log('pageSize1 = ', this.pageSize);
    this.pages = Array(this.pageSize).fill(0).map((x: number, i: number): number => i);
    this.pages.pop();
  }

  public get currentPage(): number {
    return this.active;
  }

  public handleClickPageNumber(el: number): void {
    this.active = el;
  }

  public handleClickNextArrow(): void {
    this.active++;
  }
}
