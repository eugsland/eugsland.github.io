import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, AppNavbarComponent, ContentListComponent, HeaderComponent,
  BlogComponent, YoutubeComponent, FooterComponent } from './component';
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
