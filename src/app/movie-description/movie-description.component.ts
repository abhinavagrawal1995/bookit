import { Component, OnInit, Input } from '@angular/core';
import { MovieDescription } from 'src/model/MovieDescription';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';
import { User } from 'src/model/User';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  _movieId: String;
  get movieId(): String {
    return this._movieId;
  }

  @Input('movieId')
  set movieId(value: String) {
    if (!value || value === '') {
      return;
    }
    this._movieId = value;
    this.movieService.getDescription(value).subscribe(
      movie => {
        this.movie = movie;
      });
  }

  user: User;


  movie: MovieDescription;

  constructor(public movieService: MovieService, public userService: UserService, public messageService: MessageService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: "Movie Added!" });
    },
      err => {
        this.messageService.add({ severity: 'error', summary: err._body });
      }
    );
  }

  removeMovie() {
    this.movieService.removeMovie(this.movie).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: "Movie Removed!" });
    },
      err => {
        this.messageService.add({ severity: 'error', summary: err._body });
      }
    );
  }

}
