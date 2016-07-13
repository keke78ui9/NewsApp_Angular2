import { Component, OnInit, Input } from '@angular/core';
import { News } from './news';
@Component({
    selector: 'news-detail',
    templateUrl: 'app/newsapp/news-detail.component.html',
    styles: [`
      ul li:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      
      span.label.label-primary {
        margin-right: 5px;
      }
  `],
})
export class NewsDetailComponent implements OnInit {
    @Input() tn : News;
    constructor() { }

    ngOnInit() { 

    }

}