import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = null;
  constructor(public http: Http) { }
  registerUrl = 'http://localhost:3000/register';
  loginUrl = 'http://localhost:3000/login';
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  isLoggedIn() {
    if (this.user == null) {
      return false;
    }
    return true;
  }

  register(userInfo): Observable<boolean> {
    return this.http.post(this.registerUrl, userInfo).pipe(
      map(res => {
        if (res.status === 401) {
          return false;
        }
        return true;
      })
    );
  }

  login(userInfo): Observable<boolean> {
    return this.http.post(this.loginUrl, userInfo).pipe(
      map(res => {
        if (res.status === 401) {
          return false;
        }
        this.user = res.json();
        return true;
      })
    );
  }
}
