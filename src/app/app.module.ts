import { keys } from './../environments/keys';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RSSParserService } from './rss/rss-parser.service';
import { Ng2PageScrollModule } from './ng2-page-scroll'

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ContentListComponent } from './content-list/content-list.component';
import { StaticFrontComponent } from './static-front/static-front.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    StaticFrontComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    AngularFireModule.initializeApp(keys.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [RSSParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
