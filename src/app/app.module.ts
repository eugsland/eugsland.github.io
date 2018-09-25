import { keys } from '../environments/keys';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from './service/post/post.service';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { HeaderComponent } from './component/header/header.component';
import { BlogComponent } from './component/blog/blog.component';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { FooterComponent } from './component/footer/footer.component';
import { MessageService } from './message/message.service';
import {HttpClientModule} from '@angular/common/http';
import {RSSParserService} from './service/rss-service/rss-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    HeaderComponent,
    BlogComponent,
    YoutubeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [RSSParserService, PostService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
