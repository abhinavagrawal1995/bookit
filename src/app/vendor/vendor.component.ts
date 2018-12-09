import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) {
    if (userService.getUser().role !== 'vendor') {
      router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}
