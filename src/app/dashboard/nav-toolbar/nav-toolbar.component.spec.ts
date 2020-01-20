import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolbarComponent } from './nav-toolbar.component';
import { DashboardModule } from './../dashboard.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NavToolbarComponent', () => {
  let component: NavToolbarComponent;
  let fixture: ComponentFixture<NavToolbarComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(NavToolbarComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when toggle button clicked', () => {
    spyOn(component.toggleSideNav, 'emit');

    const button = el.query(By.css('.mat-icon-button'));
    button.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.toggleSideNav.emit).toHaveBeenCalledTimes(1);
  });
});
