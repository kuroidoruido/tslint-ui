import { Pipe, PipeTransform } from '@angular/core';

import { Error } from '@model/error';

@Pipe({
  name: 'severities'
})
export class SeveritiesPipe implements PipeTransform {

  transform(errors: Error[], severities?: string[]): Error[] {
    return typeof severities === 'undefined' || severities.length === 0
      ? errors
      : errors.filter(e => severities.indexOf(e.ruleSeverity) !== -1);
  }

}
