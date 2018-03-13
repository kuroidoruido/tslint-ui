import { Component, OnInit } from '@angular/core';

import { FileLoaderService } from '@services/file-loader.service';
import { Error } from '@model/error';
import { FilterEntry } from '@model/filter-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  filter: any = {
    severity: {
      values: [],
      selected: []
    },
    file: {
      values: [],
      selected: []
    },
    rule: {
      values: [],
      selected: []
    }
  };
  errors: Error[] = [];

  constructor(private fileLoaderServer: FileLoaderService) { }

  ngOnInit() {
    this.fileLoaderServer.getFile()
      .subscribe(data => {
        this.errors = this.extractFiltersPosibilities(data);
      });
  }

  extractFiltersPosibilities(errors: Error[]): Error[] {
    let uniq = (acc, cur) => {
      for (let i = 0; i < acc.length; i++) {
        if (acc[i].name === cur.name) {
          acc[i].count += cur.count;
          return acc;
        }
      }
      acc.push(cur);
      return acc;
    };
    this.filter.severity.values = errors.map(e => e.ruleSeverity).map(e => <FilterEntry>{ name: e, count: 1 }).reduce(uniq, []);
    this.filter.file.values = this.truncateFilename(errors.map(e => e.name).map(e => <FilterEntry>{ name: e, count: 1 }).reduce(uniq, []));
    this.filter.rule.values = errors.map(e => e.ruleName).map(e => <FilterEntry>{ name: e, count: 1 }).reduce(uniq, []);
    return errors;
  }

  truncateFilename(files: FilterEntry[]): FilterEntry[] {
    let determineProjectRoot = files => {
      if (typeof files === 'undefined' || files.length === 0) {
        return "";
      }
      let rootPath: string = files[0].name;

      let isRootPath = (files, path) => files.map(f => f.name.startsWith(path)).reduce((acc, cur) => acc && cur, true);

      while (!isRootPath(files, rootPath)) {
        const lastSlashIndex = rootPath.lastIndexOf('/');
        if (lastSlashIndex === -1) {
          return "";
        }
        rootPath = rootPath.substring(0, lastSlashIndex);
      }

      return rootPath;
    };
    const rootPath = determineProjectRoot(files);

    return files
      .map(f => <FilterEntry>{ name: f.name.replace(rootPath, ''), count: f.count })
      .map(f => f.name.startsWith('/') ? <FilterEntry>{ name: f.name.substring(1), count: f.count } : f);
  }

  onFilterChange(event: string[], filterName: string) {
    this.filter[filterName].selected = event;
  }
}
