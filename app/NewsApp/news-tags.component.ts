import { Component, OnInit, Input } from '@angular/core';
import { News } from './news';
import {ShortTextPipe} from '../Modules/Pipes/shortText.Pipe';

@Component({
    selector: 'news-detail',
    templateUrl: 'app/newsapp/news-tags.component.html',
    styles: [`
      ul li:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      
      span.label.label-primary {
        margin-right: 5px;
      }
  `],
  pipes: [ShortTextPipe]
})
export class NewsTagsComponent implements OnInit {
    @Input() tn : News;
    constructor() { }

    ngOnInit() { 
    }
}