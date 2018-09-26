import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../../post';
import { of } from 'rxjs/observable/of';
import {MessageService} from '../../message/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
  private postesUrl = 'https://eugenewangme.firebaseio.com/test.json';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }


  /** GET postes from the server */
  getPostes (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postesUrl)
      .pipe(
        tap(postes => console.log('fetched postes')),
        catchError(this.handleError('getPostes', []))
      );
  }

  /** GET post by id. Return `undefined` when id not found */
  getPostNo404<Data>(id: number): Observable<Post> {
    const url = `${this.postesUrl}/?id=${id}`;
    return this.http.get<Post[]>(url)
      .pipe(
        map(postes => postes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} post id=${id}`);
        }),
        catchError(this.handleError<Post>(`getPost id=${id}`))
      );
  }

  /** GET post by id. Will 404 if id not found */
  getPost(id: number): Observable<{}|Post> {
    const url = `${this.postesUrl}/${id}`;
    return this.http.get<Post>(url)
      .pipe(
      tap(() => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /* GET postes whose name contains search term */
  searchPostes(term: string): Observable<Post[]> {
    // @ts-ignore
    if (!term.trim()) {
      // if not search term, return empty post array.
      return of([]);
    }
    return this.http.get<Post[]>(`${this.postesUrl}/?name=${term}`).pipe(
      tap(() => this.log(`found posts matching "${term}"`)),
      catchError(this.handleError<Post[]>('search Posts', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new post to the server */
  addPost (post: Post): Observable<{}|Post> {
    return this.http.post<Post>(this.postesUrl, post, httpOptions).pipe(
      tap((post: Post) => this.log(`added post w/ id=${post.d}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  /*
   DELETE: delete the post from the server
  deletePost (post: Post | number): Observable<{}|Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postesUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(() => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

   PUT: update the post on the server
  updatePost (post: Post): Observable<any> {
    return this.http.put(this.postesUrl, post, httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }
*/

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
