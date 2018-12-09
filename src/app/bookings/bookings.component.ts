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
  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(public userService: UserService, public movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getBookings(this.userService.getUser()).subscribe(res => {
      this.isReady = true;
      this.bookings = res;
    });
    this.sortOptions = [
      { label: 'Newest First', value: '!Year' },
      { label: 'Oldest First', value: 'Year' },
      { label: 'Rating (High to Low)', value: '!imdbRating' },
      { label: 'Rating (Low to High)', value: 'imdbRating' }
    ];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
