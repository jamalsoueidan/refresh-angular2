import { Pipe, PipeTransform } from "@angular/core";

//https://stackoverflow.com/questions/35703258/invert-angular-2-ngfor
@Pipe({
  name: "reverse",
  pure: false
})
export class ReversePipe implements PipeTransform {
  transform(items: any[]) {
    return items.slice().reverse();
  }
}
