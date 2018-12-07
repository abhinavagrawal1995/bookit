import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  register() {
    const userInfo = {
      username: this.username,
      password: this.password
    };
    this.userService.register(userInfo).subscribe(res => {
      if (res) {
        this.userService.login(userInfo).subscribe(loginStatus => {
          console.log('logged in new user');
        });
      }
    });
  }

}
