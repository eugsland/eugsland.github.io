import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentObs: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private fb: FirebaseApp
  ) { }
  ngOnInit() {
    this.contentObs = this.getCourses('/test');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getPic(picPath){
    return this.fb.storage().ref().child('img/'+picPath).getDownloadURL()
  }
}
