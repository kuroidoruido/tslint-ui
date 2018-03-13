import { Position } from '@model/position';

export class Error {
  startPosition: Position;
  endPosition: Position;

  failure: string;
  name: string;
  ruleName: string;
  ruleSeverity: string;
}
