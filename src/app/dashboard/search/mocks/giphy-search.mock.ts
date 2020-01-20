import { PageEvent } from '@angular/material';
import { GiphyPageRequest } from './../models/giphy-page-request.model';
import { GiphyPageResponse } from '../models/giphy-page-response.model';
import { GiphyItem } from './../models/giphy-item.model';

export function getGiphyPageRequest(): GiphyPageRequest {
  return {
    q: 'puppies',
    limit: 24,
    offset: 0,
    rating: 'G',
    lang: 'en'
  } as GiphyPageRequest;
}

export function getGiphyApiUri(): string {
  return 'https://api.giphy.com/v1/gifs/search';
}

export function getGiphyApiKey(): string {
  return 'fakeApi';
}

export function getSingleGiphy(): GiphyItem {
  return {
    embed_url: 'https://giphy.com/embed/12s6m8hVQyEUJq',
    id: '12s6m8hVQyEUJq',
    images: {
      '480w_still': {
        height: '270',
        url: 'https://media0.giphy.com/media/12s6m8hVQyEUJq/480w_s.jpg?cid=61f415c9ef3566db815ca96ed61c0a40981bf10e493291f4&rid=480w_s.jpg',
        width: '480'
      },
      fixed_width: {
        height: '200',
        url: 'https://media3.giphy.com/media/12s6m8hVQyEUJq/200w.gif?cid=61f415c9ef3566db815ca96ed61c0a40981bf10e493291f4&rid=200w.gif',
        width: '113'
      }
    },
    type: 'gif',
    rating: 'G',
    slug: 'soccer-goal-12s6m8hVQyEUJq',
    title: 'soccer goal GIF',
    url: 'https://giphy.com/gifs/soccer-goal-12s6m8hVQyEUJq'
  } as GiphyItem;
}

export function getInitialSearch(): GiphyPageResponse<GiphyItem> {
  return {
    data: [getSingleGiphy()],
    meta: {
      msg: 'OK',
      response_id: 'ef3566db815ca96ed61c0a40981bf10e493291f4',
      status: 200
    },
    pagination: {
      count: 1,
      offset: 0,
      total_count: 1
    }
  } as GiphyPageResponse<GiphyItem>;
}

export function getNoResultSearch(): GiphyPageResponse<GiphyItem> {
  return {
    data: [],
    meta: {
      msg: 'OK',
      response_id: 'ef3566db815ca96ed61c0a40981bf10e493291f4',
      status: 200
    },
    pagination: {
      count: 0,
      offset: 0,
      total_count: 1
    }
  } as GiphyPageResponse<GiphyItem>;
}

export function getPageEvent(): PageEvent {
  return {
    pageIndex: 1,
    pageSize: getGiphyPageRequest().limit,
    length: 1
  } as PageEvent;
}
