import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
