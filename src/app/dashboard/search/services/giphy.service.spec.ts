import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GiphyService } from './giphy.service';
import { ConfigService } from './../../../config/config.service';
import { getGiphyPageRequest, getGiphyApiUri, getGiphyApiKey, getInitialSearch } from '../mocks/giphy-search.mock';
import { GiphyItem } from './../models/giphy-item.model';
import { GiphyPageResponse } from './../models/giphy-page-response.model';

describe('GiphyService', () => {
  let giphyService: GiphyService;
  let httpTestingController: HttpTestingController;
  let configService: any;

  beforeEach(() => {
    const configServiceSpy = jasmine.createSpyObj('ConfigService', ['getGiphyApiURI', 'getGiphyApiKey']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GiphyService ,
        { provide: ConfigService, useValue: configServiceSpy }
      ]
    });


    giphyService = TestBed.get(GiphyService);
    httpTestingController = TestBed.get(HttpTestingController);
    configService = TestBed.get(ConfigService);
  });

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });

  it('should search giphy response', () => {
    configService.getGiphyApiURI.and.returnValue(getGiphyApiUri());
    configService.getGiphyApiKey.and.returnValue(getGiphyApiKey());

    giphyService.search(getGiphyPageRequest()).subscribe( (gpr: GiphyPageResponse<GiphyItem>) => {
      expect(gpr).toBeTruthy('No result returned');
      expect(gpr.data.length).toBe(1);
      expect(gpr.meta.msg).toEqual(getInitialSearch().meta.msg);
      expect(gpr.meta.response_id).toEqual(getInitialSearch().meta.response_id);
      expect(gpr.meta.status).toEqual(getInitialSearch().meta.status);
      expect(gpr.pagination.count).toBe(getInitialSearch().pagination.count);
      expect(gpr.pagination.offset).toBe(getInitialSearch().pagination.offset);
      expect(gpr.pagination.total_count).toBe(getInitialSearch().pagination.total_count);
    });

    const req = httpTestingController.expectOne(reqInner => reqInner.url === getGiphyApiUri());
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('api_key')).toEqual(getGiphyApiKey());
    expect(req.request.params.get('q')).toEqual(getGiphyPageRequest().q);
    expect(req.request.params.get('limit')).toEqual(getGiphyPageRequest().limit.toString());
    expect(req.request.params.get('offset')).toEqual(getGiphyPageRequest().offset.toString());
    expect(req.request.params.get('rating')).toEqual(getGiphyPageRequest().rating);
    expect(req.request.params.get('lang')).toEqual(getGiphyPageRequest().lang);
    req.flush(getInitialSearch());
  });
});
