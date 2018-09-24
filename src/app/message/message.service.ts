import { Injectable } from '@angular/core';
import {log} from 'util';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    log(message)
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
