import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'striptags'
})
export class StriptagsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let trimmedString = value.substring(0, 100);
  	let strippedString = trimmedString.replace(/(<([^>]+)>)/ig,"");
    return value.length>100? strippedString+"...": strippedString;
  }

}
