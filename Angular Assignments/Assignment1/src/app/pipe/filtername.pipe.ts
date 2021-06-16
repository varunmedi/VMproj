import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(value: any[], args?:any): any[] {
    if(args!==''){
      return value.filter(product => product.prodName.startsWith(args))
    }
    else return value;
  }

}
