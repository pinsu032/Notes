import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value:any , reverse?:boolean) {
    if(reverse == true){
      value.sort();
      value.reverse();
      return value;
    }
    value.sort();
    return value;
  }

}
