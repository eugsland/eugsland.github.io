import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { RSSParserService } from '../rss/rss-parser.service';
import { RSSParsed, RSSEntry, RSSFeed } from 'rss-parser';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  rssParsed: RSSParsed;
  rssEntries = Array<RSSEntry>();



  constructor(private rssParser: RSSParserService) { }
  url = 'https://medium.com/feed/@stephenfluin'

  ngOnInit() {
    this.rssParser.parseURL(CORS_PROXY + this.url).subscribe(rssParsed => {
      this.rssParsed = rssParsed;
      })
      //console.log(this.rssEntry)
    });
  }
}
