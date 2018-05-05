import { Component, OnInit } from '@angular/core';
import { keys } from '../../environments/keys';

@Component({
  selector: 'app-static-front',
  templateUrl: './static-front.component.html',
  styleUrls: ['./static-front.component.css']
})
export class StaticFrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getlink(a){
    return (keys.me[a])
  }
}
