import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../post';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html'
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
      .subscribe(posts => this.posts = Object.values(posts));
  }


  getPic(picPath) {
    return this.postService.getPicture(picPath);
  }
}
