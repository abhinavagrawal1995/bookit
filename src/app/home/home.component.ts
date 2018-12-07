import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) {
    if (!userService.isLoggedIn()) {
      router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
