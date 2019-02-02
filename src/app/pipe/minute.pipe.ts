import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minute'
})
export class MinutePipe implements PipeTransform {

  transform(value: number): string {
    const hour  = Math.floor(value / 60);

    return hour > 0 ? hour + ' hr ' + (value % 60) + ' minutes' : value + ' minutes';
  }
}
