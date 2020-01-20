import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuItemComponent } from './nav-menu-item.component';
import { DashboardModule } from './../dashboard.module';
import { navRoutes } from 'src/app/models/nav-routing.model';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NavMenuItemComponent', () => {
  let component: NavMenuItemComponent;
  let fixture: ComponentFixture<NavMenuItemComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(NavMenuItemComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      component.navigationItem = navRoutes[0];
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct navigation item', () => {
    const icon = el.query(By.css('.mat-icon'));
    expect(icon.nativeElement.textContent).toContain(component.navigationItem.icon);

    const title = el.query(By.css('.item-title'));
    expect(title.nativeElement.textContent).toContain(component.navigationItem.data.title);
  });
});
