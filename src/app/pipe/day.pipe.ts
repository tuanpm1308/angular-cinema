import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    const today = new Date();
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let prefix = '';

    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (date.getTime() === today.getTime()) {
      prefix = 'Today';
    } else {
      today.setDate(today.getDate() + 1);

      if (date.getTime() === today.getTime()) {
        prefix = 'Tomorrow';
      } else {
        prefix = '';
      }
    }

    return prefix + ' ' + weekday[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()];
  }

}
