import { Component, OnInit } from '@angular/core';
import { AccountService } from './header-admin.service';
import {AuthService} from '../../shared/auth-service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  providers: [AccountService]
})
export class HeaderAdminComponent implements OnInit {
  email: string = this.auth.UserInfo.email;
  constructor(private accountService: AccountService,
    public auth:AuthService
    ) { }

  ngOnInit() {
  }
}
