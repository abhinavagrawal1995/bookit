import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  loginClicked: EventEmitter<Object> = new EventEmitter();

  username = '';
  password = '';

  message = '';

  constructor(public userService: UserService, public router: Router, public messageService: MessageService) { }

  ngOnInit() {
  }

  login() {
    const userInfo = {
      username: this.username,
      password: this.password
    };

    this.userService.login(userInfo).subscribe(res => {
      if (res) {
        this.router.navigate(['/home']);
      }
    },
      err => {
        this.messageService.add({ severity: 'error', summary: err._body });
      }
    );
  }
}
