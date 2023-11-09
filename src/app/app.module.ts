import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CloudsBgComponent } from './clouds-bg/clouds-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CloudsBgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
