import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { Show } from 'src/model/Show';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  shows: Array<Show> = new Array();
  displayDialog: boolean;

  show: Show = {};

  selectedShow: Show;

  newShow: boolean;

  cols: any[];

  constructor(public userService: UserService, public movieService: MovieService, public router: Router,
    public messageService: MessageService) {
    if (userService.getUser().role !== 'vendor') {
      router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.movieService.getAllShowsForVendor(this.userService.getUser()).subscribe(res => {
      this.shows = res;
    });
    this.cols = [
      { field: 'imdbID', header: 'IMDB ID' },
      { field: 'date', header: 'Date' },
      { field: 'time', header: 'Time' },
      { field: 'price', header: 'Price' }
    ];
  }

  showDialogToAdd() {
    this.newShow = true;
    this.show = {};
    this.displayDialog = true;
  }

  save() {
    let shows = [...this.shows];
    if (this.newShow) {
      this.movieService.addShow(this.show, this.userService.getUser()).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: "Added New Show" });
        shows.push(this.show);
        this.shows = shows;
        this.show = null;
        this.newShow = false;
        this.displayDialog = false;
      },
        err => {
          this.messageService.add({ severity: 'error', summary: err._body });
          this.newShow = false;
          this.displayDialog = false;
        }
      );
    }
  }

  delete() {
    this.movieService.deleteShow(this.selectedShow).subscribe(res => {
      let index = this.shows.indexOf(this.selectedShow);
      this.shows = this.shows.filter((val, i) => i !== index);
      this.show = null;
      this.displayDialog = false;
    });
  }
}
