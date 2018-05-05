import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2PageScrollModule } from './ng2-page-scroll'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ContentListComponent } from './content-list/content-list.component';
import { StaticFrontComponent } from './static-front/static-front.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    StaticFrontComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
