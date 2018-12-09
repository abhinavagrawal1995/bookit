import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-movie-dashboard',
  templateUrl: './admin-movie-dashboard.component.html',
  styleUrls: ['./admin-movie-dashboard.component.css']
})
export class AdminMovieDashboardComponent implements OnInit {

  constructor() { }
  movieId: String;
  searchStr: String;

  ngOnInit() {

  }

  search() {
    this.movieId = this.searchStr;
  }

}
