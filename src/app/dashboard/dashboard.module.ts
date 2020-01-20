import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchModule } from './search/search.module';



@NgModule({
  declarations: [DashboardComponent, NavMenuItemComponent, NavToolbarComponent],
  imports: [
    CommonModule,
    SearchModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
