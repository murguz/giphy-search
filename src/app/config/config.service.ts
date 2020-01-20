import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  giphyApiURI: string;
  giphyApiKey: string;

  constructor() {
    this.giphyApiURI = 'https://api.giphy.com/v1/gifs/search';
    this.giphyApiKey = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';
  }

  getGiphyApiURI() {
    return this.giphyApiURI;
  }

  getGiphyApiKey() {
    return this.giphyApiKey;
  }
}
