import { PipeTransform, Pipe } from "@angular/core";

//https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(items: any[], callback: (last: any, next: any) => any): any {
    if (!items || !callback) {
      return items;
    }
    return items.sort(callback);
  }
}
