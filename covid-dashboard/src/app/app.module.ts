import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

import { GraphComponent } from './components/graph/graph.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { GlobalCasesComponent } from './components/global-cases/global-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalCasesComponent,
    GraphComponent,
    SpinnerComponent,
    ListComponent,
    TableComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
