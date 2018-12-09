import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http, private cookieService: CookieService, public router: Router) { }

  registerUrl = environment.url + '/user/register';
  loginUrl = environment.url + '/user/login';
  updateUrl = environment.url + '/user/update';
  allUsersUrl = environment.url + '/user/all';
  deleteUrl = environment.url + '/user/remove';

  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  isLoggedIn() {
    if (this.getUser().role === 'guest') {
      return false;
    }
    return true;
  }

  getAllUsers() {
    return this.http.get(this.allUsersUrl).pipe(
      map(res => res.json()
      )
    );
  }

  register(userInfo): Observable<boolean> {
    return this.http.post(this.registerUrl, userInfo).pipe(
      map(res => true
        , err => false)
    );
  }

  deleteUser(userInfo): Observable<boolean> {
    return this.http.post(this.deleteUrl, userInfo).pipe(
      map(res => true
        , err => false)
    );
  }


  updateDetails(userInfo): Observable<boolean> {
    return this.http.post(this.updateUrl, userInfo).pipe(
      map(res => true
        , err => false)
    );
  }


  login(userInfo): Observable<boolean> {
    return this.http.post(this.loginUrl, userInfo).pipe(
      map(res => {
        if (res.status === 401) {
          return false;
        }
        this.setUser(res.json());
        return true;
      })
    );
  }

  private setUser(user: User) {
    this.cookieService.set('user', JSON.stringify(user));
  }

  getUser(): User {
    const str = this.cookieService.get('user');
    if (str === '') {
      return { firstName: 'Guest', role: 'guest' };
    }
    return JSON.parse(str);
  }

  logout() {
    this.router.navigate(['/login']);
    this.cookieService.delete('user');
  }
}
