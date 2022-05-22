import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ZingchartAngularModule } from 'zingchart-angular';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ModuleChartComponent } from './module-chart/module-chart.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuleChartComponent,
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ZingchartAngularModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
