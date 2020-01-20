import { Route } from '@angular/router';

export interface NavRoute extends Route {
  icon?: string;
  data: {
    title: string;
  };
}

export const navRoutes: NavRoute[] = [
  {
    data: { title: 'Search Giphy' },
    icon: 'search',
    path: 'search'
  },
];
