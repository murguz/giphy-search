import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchModule } from './search.module';
import { DebugElement } from '@angular/core';
import { GiphyService } from './services/giphy.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { getInitialSearch, getPageEvent, getGiphyPageRequest, getNoResultSearch } from './mocks/giphy-search.mock';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let el: DebugElement;
  let giphyService: any;

  beforeEach(async(() => {
    const giphyServiceSpy = jasmine.createSpyObj('GiphyService', ['search']);

    TestBed.configureTestingModule({
      imports: [SearchModule, NoopAnimationsModule],
      providers: [
        { provide: GiphyService, useValue: giphyServiceSpy }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      giphyService = TestBed.get(GiphyService);
      component.giphyPageRequest = getGiphyPageRequest();
      giphyService.search.and.returnValue(of(getInitialSearch()));
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show giphy-items after search', () => {
    giphyService.search.and.returnValue(of(getInitialSearch()));
    component.onSearch();
    fixture.detectChanges();

    const giphyItems = el.queryAll(By.css('app-giphy-item'));
    expect(giphyItems).toBeTruthy('Could not find giphy items');
    expect(giphyItems.length).toBe(1, 'Incorrect number of giphy items');
  });

  it('should check resetOffset functionality', () => {
    component.giphyPageRequest.offset = 12;
    component.onSearch(true);
    fixture.detectChanges();
    expect(component.giphyPageRequest.offset).toBe(0, 'Couldnt reset offset');

    component.giphyPageRequest.offset = 12;
    component.onSearch(false);
    fixture.detectChanges();
    expect(component.giphyPageRequest.offset).toBe(12, 'Shoulnt reset offset');
  });

  it('should set correct offset after onPageChange event', () => {
    component.onPageChange(getPageEvent());
    fixture.detectChanges();

    expect(component.giphyPageRequest.offset).toBe(getPageEvent().pageIndex * getGiphyPageRequest().limit, 'Incorrect offset');
  });

  it('should not show paginator if total_count is less than count', () => {
    giphyService.search.and.returnValue(of(getInitialSearch()));
    component.onSearch();
    fixture.detectChanges();

    expect(component.showPaginator()).toBe(false, 'Shouldnt show paginator');
  });

  it('should show correct pageIndex', () => {
    expect(component.getPageIndex()).toBe(getGiphyPageRequest().offset / getGiphyPageRequest().limit, 'Incorrect page index');
  });

  it('it should not show no results if there is a result', () => {
    giphyService.search.and.returnValue(of(getInitialSearch()));
    component.onSearch();
    fixture.detectChanges();

    expect(el.query(By.css('.no-results'))).toBeNull();
  });

  it('it should show no results if there is no result', () => {
    giphyService.search.and.returnValue(of(getNoResultSearch()));
    component.onSearch();
    fixture.detectChanges();

    expect(el.query(By.css('.no-results'))).toBeTruthy();
  });

});
