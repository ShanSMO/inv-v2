import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'c-inv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    window.location.href =
      'http://localhost:8180/auth/realms/cit-inventory/protocol/openid-connect/auth?' +
      'response_type=code&scope=openid%20email&client_id=inventory-app&redirect_uri=http://localhost:4200/dashboard';
    // this.route.navigateByUrl('/dashboard');
  }

}
