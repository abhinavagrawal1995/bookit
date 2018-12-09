import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Show } from 'src/model/Show';
import { Booking } from 'src/model/Booking';
import { Movie } from 'src/model/Movie';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  _booking: Booking;
  get booking(): Booking {
    return this._booking;
  }

  @Input('booking')
  set booking(value: Booking) {
    if (!value || value === '') {
      return;
    }
    this._booking = value;
    this.movieService.getBookingInfo(value).subscribe(
      booking => {
        this.bookingInfo = booking;
        this.movieService.getDescription(booking.show.imdbID).subscribe(
          movie => {
            this.movie = movie;
          });
      });
  }
  bookingInfo: Booking;
  movie: Movie;
  constructor(public movieService: MovieService) { }

  ngOnInit() {
  }


}
