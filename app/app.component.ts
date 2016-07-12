import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    ul { color: #fff}
  `],
  providers: [
    NewsService
  ]
  
})
export class AppComponent implements OnInit {
    news: News[];
    error: any;

    constructor(private newsService: NewsService) {

    }


    getData() {
      this.newsService.getNews().then(x => this.news = x)
      .catch(error => this.error = error);
    }
    
    ngOnInit() {
      this.getData();
    }

    
}