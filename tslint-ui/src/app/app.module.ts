import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { FilterBlockComponent } from '@components/filter-block/filter-block.component';
import { ErrorElementComponent } from '@components/error-element/error-element.component';
import { FileLoaderService } from '@services/file-loader.service';
import { FilesPipe } from '@pipes/files.pipe';
import { SeveritiesPipe } from '@pipes/severities.pipe';
import { RulesPipe } from '@pipes/rules.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // components
    FilterBlockComponent,
    ErrorElementComponent,
    // pipes
    FilesPipe,
    SeveritiesPipe,
    RulesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    MatListModule
  ],
  providers: [
    FileLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
