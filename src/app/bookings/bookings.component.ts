import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MovieService } from '../services/movie.service';
import { Booking } from 'src/model/Booking';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Array<Booking> = new Array();
  isReady = true;

  constructor(public userService: UserService, public movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getBookings(this.userService.getUser()).subscribe(res => {
      this.bookings = res;
    });
  }

}
