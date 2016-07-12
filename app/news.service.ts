import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from './news';

@Injectable()
export class NewsService {
    private newsUrl = 'api/news';

    constructor(private http: Http) {

    }

  getNews(): Promise<News[]> {
    return this.http.get(this.newsUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
      console.error('error year!', error);
      return Promise.reject(error.message || error);
  }
}