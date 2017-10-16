import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { TableComponent } from './shared/table.component';
import { TableCellComponent } from './shared/table-cell.component';

import { EBCApiService, StatsService } from './services/index';

import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent, StatsComponent, TableComponent, TableCellComponent, CapitalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [EBCApiService, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
