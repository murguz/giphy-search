import { navRoutes } from './../models/nav-routing.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule, NoopAnimationsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getNavigationItems', () => {
    expect(component.getNavigationItems()).toBe(navRoutes);
  });

  it('should show sideNav when its open', () => {
    component.isOpen = true;
    fixture.detectChanges();
    expect(el.query(By.css('.sidenav-logo-container'))).toBeTruthy();
  });

  it('should not show sideNav when its closed', () => {
    component.isOpen = false;
    fixture.detectChanges();
    const sic = el.query(By.css('.sidenav-logo-container'));

    expect(sic.nativeElement.hasAttribute('visibility')).toEqual(false);
  });
});
