import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';
import { NewsTagsComponent } from './news-tags.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
      ul li:hover {
          text-decoration: underline;
          cursor: pointer;
        }

      
      span.label.label-primary {
        margin-right: 5px;
      }

  `],
  directives: [NewsTagsComponent],
  providers: [
    NewsService
  ]
  
})
export class AppComponent implements OnInit {
    news: News[];
    error: any;
    selectedNews: News;

    constructor(private newsService: NewsService) {

    }


    getData() {
      this.newsService.getNews().then(x => this.news = x)
      .catch(error => this.error = error);
    }
    
    ngOnInit() {
      this.getData();
    }

    oneSelect(news: News) {
        this.selectedNews = news;
    }
}