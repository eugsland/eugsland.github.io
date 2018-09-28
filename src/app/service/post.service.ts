import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../post';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {keys} from '../../environments/keys';
import {api} from '../../environments/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
  private postesUrl = 'https://eugenewangme.firebaseio.com/test/exp.json';  // URL to web api
  private dbset;
  constructor(private http: HttpClient, private messageService: MessageService) {}

  /** GET postes from the server */
  getPostes (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postesUrl)
      .pipe(
        tap(postes => console.log('fetched postes')),
        catchError(this.handleError('getPostes', []))
      );
  }

  getPicture(picPath) {
    return api.storage + picPath + '?alt=media';
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PostService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }
}
