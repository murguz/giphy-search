import { SearchModule } from './../search.module';
import { GiphyItem } from './../models/giphy-item.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyItemComponent } from './giphy-item.component';
import { DebugElement } from '@angular/core';
import { getSingleGiphy } from '../mocks/giphy-search.mock';
import { By } from '@angular/platform-browser';

describe('GiphyItemComponent', () => {
  let component: GiphyItemComponent;
  let fixture: ComponentFixture<GiphyItemComponent>;
  let el: DebugElement;

  const giphyItem: GiphyItem = getSingleGiphy();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SearchModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphyItemComponent);
      component = fixture.componentInstance;
      component.giphyItem = giphyItem;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getImageUrl', () => {
    expect(component.getImageUrl()).toEqual(giphyItem.images['480w_still'].url);
  });

  it('should getGifUrl', () => {
    expect(component.getGifUrl()).toEqual(giphyItem.images.fixed_width.url);
  });

  it('should show only static image when not playing', () => {
    component.setPlaying(false);
    fixture.detectChanges();

    expect(el.query(By.css('.img-static'))).toBeTruthy();
    expect(el.query(By.css('.img-gif'))).toBeNull();
  });

  it('should show only gif image when playing', () => {
    component.setPlaying(true);
    fixture.detectChanges();

    expect(el.query(By.css('.img-static'))).toBeNull();
    expect(el.query(By.css('.img-gif'))).toBeTruthy();
  });

  it('should show correct giphyItem', () => {
    const title = el.query(By.css('.mat-card-header .mat-card-title'));
    expect(title.nativeElement.textContent).toEqual(giphyItem.title);

    const id = el.query(By.css('.mat-card-header .mat-card-subtitle'));
    expect(id.nativeElement.textContent).toEqual(giphyItem.id);
  });
});
