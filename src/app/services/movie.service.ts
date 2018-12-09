import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { Movie } from 'src/model/Movie';
import { map, subscribeOn } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MovieDescription } from 'src/model/MovieDescription';
import { Show } from 'src/model/Show';
import { UserService } from './user.service';
import { User } from 'src/model/User';
import { Booking } from 'src/model/Booking';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: Http) { }

  summaryUrl = environment.url + '/movie/summary';
  allBookingsUrl = environment.url + '/booking/all';
  findShowUrl = environment.url + '/show/find';
  descrptionUrl = 'http://www.omdbapi.com/?apikey=adc8cbae&i=';
  createBookingUrl = environment.url + '/booking/create';
  movieMap: Map<String, MovieDescription> = new Map();

  getSummaryList(): Observable<Array<Movie>> {
    return this.http.get(this.summaryUrl).pipe(
      map(res => {
        return res.json();
      })
    );
  }

  getDescription(movieId): Observable<MovieDescription> {
    const obv: BehaviorSubject<MovieDescription> = new BehaviorSubject(null);
    if (this.movieMap.has(movieId)) {
      obv.next(this.movieMap.get(movieId));
    } else {
      this.http.get(this.descrptionUrl + movieId)
        .subscribe(res => {
          this.movieMap.set(movieId, res.json());
          obv.next(res.json());
        });
    }
    return obv;
  }
  getShows(movieId: String): Observable<Array<Show>> {
    return this.http.get(this.findShowUrl, { params: { imdbID: movieId } })
      .pipe(map(res =>
        res.json()
      ));
  }


  getBookings(user: User): Observable<Array<Booking>> {
    return this.http.get(this.allBookingsUrl, { params: { user: user } })
      .pipe(map(res =>
        res.json()
      ));
  }

  book(show: Show, user: User, seats) {
    return this.http.post(this.createBookingUrl, { user: user, show: show, seats: seats }).pipe(
      map(res => true
        , err => false)
    );
  }
}
