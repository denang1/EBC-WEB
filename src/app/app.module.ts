import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { EBCApiService, StatsService } from './services/index';

@NgModule({
  declarations: [
    AppComponent, StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [EBCApiService, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
