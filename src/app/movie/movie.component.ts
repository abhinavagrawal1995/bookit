import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDescription } from 'src/model/MovieDescription';
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

  movie: MovieDescription = {
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Genre: 'Action, Adventure, Thriller',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    Title: 'Batman Begins',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Year: '2005',
    imdbID: 'tt0372784',
    imdbRating: '8.3',
  };
  shows: Array<Show> = [{
    imdbID: 'tt0372784',
    theatreName: 'Regal',
    date: '27/05',
    time: '12:30',
    price: '9.99',
    id: 'asdasdsad'
  }, {
    imdbID: 'tt0372784',
    theatreName: 'IMAX',
    date: '27/05',
    time: '12:30',
    price: '19.99',
    id: 'asdasdsad'
  }];
  constructor(public movieService: MovieService, public userService: UserService, private route: ActivatedRoute,
    public router: Router, public messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['imdbID'];
      // this.movieService.getDescription(movieId).subscribe(
      //   movie => {
      //     this.movie = movie;
      //   }
      // );
      // this.movieService.getShows(movieId).subscribe(
      //   shows => {
      //     this.shows = shows;
      //   }
      // );
    });

  }

  book(show: Show) {
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
