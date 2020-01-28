import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../auth/auth-service.service';
import { UserService } from './user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { orderCreateData } from './orderCreateData.model';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  role = '';
  user: any;
 
 
  constructor(private userService: UserService, private authService: AuthServiceService) { }
  ngOnInit() {
  }
 
}
