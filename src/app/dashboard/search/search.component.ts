import { GiphyPageRequest } from './models/giphy-page-request.model';
import { GiphyService } from './services/giphy.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent, MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { GiphyPageResponse } from './models/giphy-page-response.model';
import { GiphyItem } from './models/giphy-item.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  giphyPageRequest: GiphyPageRequest = {
    q: 'puppies',
    limit: 24,
    offset: 0,
    rating: 'G',
    lang: 'en'
  } as GiphyPageRequest;

  searchResponse: GiphyPageResponse<GiphyItem>;
  searchResults: GiphyItem[];

  constructor(private giphyService: GiphyService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch(resetOffset: boolean = true) {
    if (resetOffset) { this.giphyPageRequest.offset = 0; }

    this.giphyService.search(this.giphyPageRequest).subscribe((response: GiphyPageResponse<GiphyItem>) => {
      this.searchResponse = response;
      this.searchResults = response.data;
    }, (error: HttpErrorResponse) => {
      this.snackBar.open(error.message, 'Error', {
        duration: 2000,
      });
    });
  }

  onPageChange(pageEvent: PageEvent) {
    this.giphyPageRequest.offset = pageEvent.pageIndex * this.giphyPageRequest.limit;
    this.onSearch(false);
  }

  showNoResults(): boolean {
    return this.searchResults !== undefined && this.searchResults.length === 0;
  }

  showPaginator(): boolean {
    return this.searchResponse != null && this.searchResponse.pagination.total_count > this.searchResponse.pagination.count;
  }

  getPageIndex(): number {
    return this.giphyPageRequest.offset / this.giphyPageRequest.limit;
  }

}
