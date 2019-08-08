import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(league: any, leaguer: any): any {
    if (leaguer === undefined) return league;

    return league.filter(function(l: any) {
      return l.toLowerCase().includes(leaguer.toLowerCase());
    });
  }

}
