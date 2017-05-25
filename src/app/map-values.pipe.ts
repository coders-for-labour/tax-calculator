import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapValues'
})
export class MapValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => <any>{
      key: key,
      value: value[key]
    });
  }
}
