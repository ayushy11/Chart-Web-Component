import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleChartComponent } from './module-chart/module-chart.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'module-chart', component: ModuleChartComponent },
  { path: 'dynamic', component: DynamicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
