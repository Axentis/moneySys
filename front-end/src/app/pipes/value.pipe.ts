import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value==0)
    {
      return "";
    }
    return value;
  }

}
