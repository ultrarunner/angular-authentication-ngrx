import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import { Feed } from '../models/feed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPublicFeeds(): Observable<any> {
    return this.http.get(this.apiUrl + '/public').pipe(
      map((response) => {
          return response;
      })
    );
  }

  getRssFeed(url: string, take: number): Observable<any> {
    return this.http.get(this.apiUrl + `/rss?url=${url}&take=${take}`).pipe(
      map((response) => {
          return response;
      })
    );
  }

  getNyFeed(section: string, take: number): Observable<any> {
    return this.http.get(this.apiUrl + `/nyt/${section}?take=${take}`).pipe(
      map((response) => {
          return response;
      })
    );
  }

  getNasaApod(): Observable<any> {
    return this.http.get(this.apiUrl + `/nasa`).pipe(
      map((response) => {
          return response;
      })
    );
  }
}
