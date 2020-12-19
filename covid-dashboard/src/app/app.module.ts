import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GlobalCasesComponent } from './global-cases/global-cases.component';
import { GraphComponent } from './graph/graph.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalCasesComponent,
    GraphComponent,
    SpinnerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
