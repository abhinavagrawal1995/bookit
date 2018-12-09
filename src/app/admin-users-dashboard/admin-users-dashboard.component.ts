import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { User } from 'src/model/User';

@Component({
  selector: 'app-admin-users-dashboard',
  templateUrl: './admin-users-dashboard.component.html',
  styleUrls: ['./admin-users-dashboard.component.css']
})
export class AdminUsersDashboardComponent implements OnInit {

  users: Array<User> = new Array();
  displayDialog: boolean;

  user: User = {};

  selectedUser: User;

  newUser: boolean;

  cars: User[];

  cols: any[];

  constructor(public userService: UserService, public router: Router, public messageService: MessageService) {
    if (userService.getUser().role !== 'admin') {
      router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
    this.cols = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'username', header: 'Username' },
      { field: 'password', header: 'Password' },
      { field: 'role', header: 'Role' }
    ];
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = {};
    this.displayDialog = true;
  }

  save() {
    let users = [...this.users];
    if (this.newUser) {
      this.userService.register(this.user).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: "Added New User" });
        users.push(this.user);
        this.users = users;
        this.user = null;
        this.newUser = false;
        this.displayDialog = false;
      },
        err => {
          this.messageService.add({ severity: 'error', summary: err._body });
          this.newUser = false;
          this.displayDialog = false;
        }
      );
    } else {
      this.userService.updateDetails(this.user).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: "Updated User" });
        users[this.users.indexOf(this.selectedUser)] = this.user;
        this.users = users;
        this.user = null;
        this.displayDialog = false;
      },
        err => {
          this.messageService.add({ severity: 'error', summary: err._body });
          this.user = null;
          this.displayDialog = false;
        }
      );
    }
  }

  delete() {
    this.userService.deleteUser(this.selectedUser).subscribe(res => {

      let index = this.users.indexOf(this.selectedUser);
      this.users = this.users.filter((val, i) => i !== index);
      this.user = null;
      this.displayDialog = false;
    });
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }

  cloneUser(c: User): User {
    let user = {};
    for (let prop in c) {
      user[prop] = c[prop];
    }
    return user;
  }

}
