import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ErrorElementComponent } from '@components/error-element/error-element.component'
import { FilterBlockComponent } from '@components/filter-block/filter-block.component'
import { SeveritiesPipe } from '@pipes/severities.pipe'
import { FileLoaderService } from '@services/file-loader.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ErrorElementComponent,
        FilterBlockComponent,
        SeveritiesPipe
      ],
      providers: [
        { provide: FileLoaderService, useClass: FileLoaderServiceSpy },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

/// Spy
class FileLoaderServiceSpy {

}
