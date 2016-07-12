import { Component, OnInit, Input } from '@angular/core';
import { News } from './news';

@Component({
    selector: 'one-news-tags',
    templateUrl: 'app/news-tags.component.html'
})
export class NewsTagsComponent{
    @Input() new: News;
}