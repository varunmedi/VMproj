import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(list: any[], args: string): any {
    let sortedArray= list.sort((a,b)=>{
      if(a[args] > b[args]){
        return 1;
      }
      if(a[args]<b[args]){
        return -1
      }
      return 0
    })
    return sortedArray;
  }

}
