import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardsRoutingModule,
  ],
  exports: [
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
