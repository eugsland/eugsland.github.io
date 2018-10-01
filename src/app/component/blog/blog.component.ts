
import { Component, OnInit } from '@angular/core';
import { RSSParsed, RSSEntry, RSSFeed } from 'rss-parser';
import { rssParser } from '/'
import { Observable } from 'rxjs/Observable';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const URL = 'https://medium.com/feed/@eugenerwang'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  rssObs: Observable<any>;
  entries: RSSEntry[];

  constructor(private rssParser: RSSParserService) { }


  ngOnInit() {
    this.getRss();
  }

  getRss() {
    this.rssParser.parseURL(CORS_PROXY + URL).subscribe(
      (data) => {
        console.log(data);
        this.entries = data.feed.entries;
      }
    );
  }
}
