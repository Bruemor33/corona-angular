import { Component, OnInit } from '@angular/core';
import {DashboardsService} from '../dashboards.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardsService) { }

  ngOnInit() {
  }

}
