import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from 'src/model/Movie';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  isReady = true;
  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  movies: Array<Movie>;
  constructor(public userService: UserService, router: Router, public movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getSummaryList().subscribe(res => {
      this.isReady = true;
      this.movies = res;
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
