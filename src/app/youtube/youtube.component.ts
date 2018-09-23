import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})



export class YoutubeComponent implements OnInit {
  contentObs: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private fb: FirebaseApp
  ) { }
  ngOnInit() {
    this.contentObs = this.getCourses('/test');
  }

  getCourses(listPath): Observable<any[]> {

    //Magical sorting
    return this.db.list(listPath).valueChanges().map((data) => {
      function value(goo) {
        return goo.d
      }
      data.sort((a, b) => {
          return value(a) < value(b) ? 1 : -1;
       });
      return data;
   });;
  }


  getPic(picPath){
    return 'https://firebasestorage.googleapis.com/v0/b/eugenewangme.appspot.com/o/'+ picPath + '?alt=media';
  }
}
