import { NavRoute, navRoutes } from './../models/nav-routing.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  public getNavigationItems(): NavRoute[] {
    return navRoutes;
  }

}
