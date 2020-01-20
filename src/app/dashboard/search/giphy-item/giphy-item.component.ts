import { GiphyItem } from './../models/giphy-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-item',
  templateUrl: './giphy-item.component.html',
  styleUrls: ['./giphy-item.component.scss']
})
export class GiphyItemComponent implements OnInit {

  @Input() giphyItem: GiphyItem = {} as GiphyItem;
  isPlaying: boolean;

  constructor() {
    this.isPlaying = false;
  }

  ngOnInit() {
  }

  setPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  getImageUrl(): string {
    return this.giphyItem.images['480w_still'].url;
  }

  getGifUrl(): string {
    return this.giphyItem.images.fixed_width.url;
  }

}
