import { Pipe, PipeTransform } from '@angular/core';

import { Error } from '@model/error';

@Pipe({
  name: 'files'
})
export class FilesPipe implements PipeTransform {

  transform(errors: Error[], files?: string[]): Error[] {
    return typeof files === 'undefined' || files.length === 0
      ? errors
      : this.reallyTransform(errors, files);
  }

  private reallyTransform(errors: Error[], files?: string[]): Error[] {
    let endsWithAny = (absFile,files) => {
      return files.map(f => absFile.endsWith(f)).reduce((a,b) => a || b, false);
    };
    return errors.filter(e => endsWithAny(e.name,files));
  }
}
