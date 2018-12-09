import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/model/Show';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  seats = 0;
  movieId: String;

  shows: Array<Show>;
  constructor(public movieService: MovieService, public userService: UserService, private route: ActivatedRoute,
    public router: Router, public messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['imdbID'];
      this.movieService.getShowsByMovie(this.movieId).subscribe(
        shows => {
          this.shows = shows;
        }
      );
    });

  }

  book(show: Show) {
    if (this.seats < 1) {
      this.messageService.add({ severity: 'error', summary: 'Please select at least 1 seat.' });
      return;
    }
    this.movieService.book(show, this.userService.getUser(), this.seats).subscribe(res => {
      if (res) {
        this.messageService.add({ severity: 'success', summary: 'Booking Successful' });
        this.router.navigate(['/bookings']);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Booking Failed' });
      }
    });
  }

}
