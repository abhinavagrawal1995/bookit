import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Booking } from 'src/model/Booking';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usher',
  templateUrl: './usher.component.html',
  styleUrls: ['./usher.component.css']
})
export class UsherComponent implements OnInit {

  constructor(public movieService: MovieService, public messageService: MessageService) { }

  searchStr: String;
  booking: Booking;


  ngOnInit() {
  }

  search() {
    this.movieService.getBookingSummary(this.searchStr).subscribe(booking => {
      this.booking = booking;
    }, err => {
      this.messageService.add({ severity: 'error', summary: "No such booking." });
    });

  }

}
