import { Component, Input, OnInit } from '@angular/core';

import { Error } from '@model/error';
import { Position } from '@model/position';

@Component({
  selector: 'error-element',
  templateUrl: './error-element.component.html',
  styleUrls: ['./error-element.component.scss']
})
export class ErrorElementComponent implements OnInit {

  @Input('value')
  value: Error;

  constructor() { }

  ngOnInit() {
  }

  printPosition(pos: Position): string {
    // position returned start from zero
    return '[' + (pos.line + 1) + ':' + (pos.character + 1) + ']'
  }

}
