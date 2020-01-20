import { NavRoute } from './../../models/nav-routing.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {

  @Input() navigationItem: NavRoute = {} as NavRoute;
  constructor() { }

  ngOnInit() {
  }

}
