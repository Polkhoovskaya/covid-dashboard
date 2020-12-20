import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

import { GraphComponent } from './components/graph/graph.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { GlobalCasesComponent } from './components/global-cases/global-cases.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalCasesComponent,
    GraphComponent,
    SpinnerComponent,
    ListComponent,
    TableComponent,
    ContentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
