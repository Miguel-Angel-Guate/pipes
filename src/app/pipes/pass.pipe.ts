import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass',
})
export class PassPipe implements PipeTransform {
  transform(value: string, show: boolean = true): string {
    return show ? '*'.repeat(value.length) : value;
  }
}
