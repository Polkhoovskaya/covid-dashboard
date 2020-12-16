import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
