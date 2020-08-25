import { Pipe, PipeTransform } from '@angular/core';

const separation = 1;

@Pipe({name: 'pagination'})
export class PaginationPipe implements PipeTransform {

  public transform(value: any[], page: number): any[] {
    // tslint:disable-next-line:no-console
    console.log('kek ', [...value.slice(separation * (page), separation * (page + 1))]);
    return [...value.slice(separation * (page), separation * (page + 1))];
  }
}

