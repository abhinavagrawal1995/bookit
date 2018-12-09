import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  loading = false;
  message: String = '';

  constructor(public userService: UserService) {
    this.user = userService.getUser();
  }

  update() {
    this.loading = true;

    this.userService.updateDetails(this.user).subscribe(res => {
      this.loading = false;
      if (res) {
        this.message = 'Updated.';
      }
    },
      err => {
        this.loading = false;
        this.message = 'Unable to update.';
      }
    );
  }

  ngOnInit() {
  }

}
