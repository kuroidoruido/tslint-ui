import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorElementComponent } from './error-element.component';
import { Error } from '@model/error';
import { Position } from '@model/position';

describe('ErrorElementComponent', () => {
  let component: ErrorElementComponent;
  let fixture: ComponentFixture<ErrorElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorElementComponent);
    component = fixture.componentInstance;

    component.value = newError();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/// HELPER

function newError() {
  let res = new Error();
  res.startPosition = new Position();
  res.endPosition = new Position();
  return res;
}
