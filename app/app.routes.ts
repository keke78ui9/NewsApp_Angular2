import { provideRouter, RouterConfig }  from '@angular/router';
import { NewsTagsComponent } from './NewsApp/news-tags.component';
import { NewsListComponent } from './NewsApp/newsList.component';
import { NewsDetailComponent } from './NewsApp/news-detail.component';

const routes: RouteConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: NewsListComponent
  },
  {
    path: 'detail/:id',
    component: NewsDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

