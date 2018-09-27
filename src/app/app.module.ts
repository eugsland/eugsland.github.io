import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, AppNavbarComponent, ContentListComponent, HeaderComponent,
  BlogComponent, YoutubeComponent, FooterComponent, ResumeComponent } from './component';
import { PostService, MessageService, RSSParserService } from './service';

// https://github.com/cornflourblue/angular-6-registration-login-example

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    HeaderComponent,
    BlogComponent,
    YoutubeComponent,
    FooterComponent,
    ResumeComponent
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
// page 1
//  Welcome
//  project,
//  video
//  dev tools

// Page 2
//  interest dev
//  other

// Page 2:
//  Job/Work
//
// page 3
//  social: linkedin, github, insta, play
//
