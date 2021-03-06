import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = null;

  constructor(public userService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
