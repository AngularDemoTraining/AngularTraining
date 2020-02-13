import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../auth/auth-service.service';
import { UserService } from './user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { orderCreateData } from './orderCreateData.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  role = '';
  user: any;
  fullName: string ='';
 
  constructor(private userService: UserService, private authService: AuthServiceService,private router:Router) { }
  ngOnInit() {
    this.authService.user.subscribe(resp => {
      this.role = resp.role
    
    })
    this.fullName = JSON.parse(localStorage.getItem('userData1')).fullName;
    console.log(this.fullName)
  }
  onLogOut() {
    this.authService.user.next(null);
    localStorage.removeItem('token')
    localStorage.removeItem('userData1')
    this.router.navigate(['/'])
  }
}
