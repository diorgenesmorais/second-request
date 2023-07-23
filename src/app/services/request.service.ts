import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRepos(): Observable<any> {
    return this.httpClient.get('https://api.github.com/users/diorgenesmorais')
      .pipe(
        switchMap((r1: any) => {
          return this.httpClient.get(r1.repos_url);
        })
      )
  }
}
