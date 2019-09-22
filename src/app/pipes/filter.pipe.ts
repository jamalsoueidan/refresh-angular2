import { PipeTransform, Pipe } from "@angular/core";

//https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], callback: (item: any) => boolean): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(callback);
  }
}
