import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Error } from '@model/error';

@Injectable()
export class FileLoaderService {

  private static readonly FILE_NAME: string = 'tiny.json';

  constructor(private http: HttpClient) { }

  getFile(): Observable<Error[]> {
    return <Observable<Error[]>>this.http.get('assets/' + FileLoaderService.FILE_NAME);
  }

}
