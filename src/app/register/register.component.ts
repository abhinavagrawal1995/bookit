import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  firstName = '';
  lastName = '';
  phone = '';
  loading = false;
  constructor(public userService: UserService, public messageService: MessageService, public router: Router) { }

  ngOnInit() {
  }

  register() {
    const userInfo = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      role: 'user'
    };
    this.loading = true;
    this.userService.register(userInfo).subscribe(res => {
      this.loading = false;
      if (res) {
        this.userService.login(userInfo).subscribe(loginStatus => {
          this.router.navigate(['/home']);
        });
      }
    },
      err => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: err._body });
      }
    );
  }
}
