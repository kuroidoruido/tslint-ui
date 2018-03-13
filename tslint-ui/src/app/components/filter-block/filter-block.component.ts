import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FilterEntry } from '@model/filter-entry';

@Component({
  selector: 'filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {

  @Input('title')
  private title: string;

  @Input('opened')
  private opened: boolean = false;

  @Input('filter-values')
  private filterValues: FilterEntry[] = [];

  @Output('onSelectedFiltersChange')
  selectedFiltersChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input('selected-filters')
  set selectedFilters(input: string[]) {
    this._selectedFilters = input.map(e => this.filterValues.filter(fv => fv.name === e)[0]);
  }
  private _selectedFilters: FilterEntry[] = [];

  constructor() { }

  ngOnInit() {
  }

  clickTitle() {
    this.opened = !this.opened;
  }

  onFilterChange(event: FilterEntry[]) {
    this.selectedFiltersChange.emit(event.map(e => e.name));
  }
}
