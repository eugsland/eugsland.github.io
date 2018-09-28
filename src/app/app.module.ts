import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, AppNavbarComponent, ContentListComponent, HeaderComponent, BlogComponent, YoutubeComponent, FooterComponent, PMainComponent, ErrorComponent } from './component';
import { PostService, MessageService, RSSParserService } from './service';
import { RouterModule, Routes } from '@angular/router';

// https://github.com/cornflourblue/angular-6-registration-login-example

const appRoutes: Routes = [
  { path: 'Interests', component: PMainComponent },
  { path: 'Jobs',      component: PMainComponent },
  { path: 'links', component: PMainComponent },
  { path: '', component: PMainComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    HeaderComponent,
    BlogComponent,
    YoutubeComponent,
    FooterComponent,
    PMainComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
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
