import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { TechNewsService } from './techNews.service';
import { NewsTagsComponent } from './news-tags.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/newsApp/newsList.component.html',
  directives: [NewsTagsComponent],
  providers: [
    TechNewsService
  ]
  
})
export class NewsListComponent implements OnInit {
    techNewsList: News[];
    error: any;
    selectedNews: News;

    constructor(private newsService: TechNewsService) {

    }


    getData() {
      this.newsService.getNews()
      .then(x => this.techNewsList = x)
      .catch(error => this.error = error);
    }
    
    ngOnInit() {
      this.getData();
    }

    onMouseOver(news: News) {
      console.info(news);
        this.selectedNews = news;
    }
}