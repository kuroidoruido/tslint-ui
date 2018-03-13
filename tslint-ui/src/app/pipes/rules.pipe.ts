import { Pipe, PipeTransform } from '@angular/core';

import { Error } from '@model/error';

@Pipe({
  name: 'rules'
})
export class RulesPipe implements PipeTransform {

  transform(errors: Error[], rules?: string[]): Error[] {
    return typeof rules === 'undefined' || rules.length === 0
      ? errors
      : errors.filter(e => rules.indexOf(e.ruleName) !== -1);
  }

}
