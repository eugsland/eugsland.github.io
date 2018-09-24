import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import {Observable, Subscribable} from 'rxjs/Observable';
import {PostService} from '../backend/post.service';
import {post} from 'selenium-webdriver/http';
import {Post} from '../post';
import {Subscriber} from 'rxjs/Subscriber';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})



export class ContentListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService ) {
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPostes()
      .subscribe(posts => { for (const key in posts) { this.posts.push(posts[key]); }});
  }


  getPic(picPath) {
    return 'https://firebasestorage.googleapis.com/v0/b/eugenewangme.appspot.com/o/' + picPath + '?alt=media';
  }
}
