import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmin-page',
  templateUrl: './addmin-page.component.html',
  styleUrls: ['./addmin-page.component.css']
})
export class AddminPageComponent implements OnInit {
  constructor(private authService: AuthServiceService, private router: Router) { }
  fullName: string ='';
  ngOnInit() {
    this.fullName = JSON.parse(localStorage.getItem('userData1')).fullName;
  }
  onLogOut() {
    this.authService.user.next(null);
    localStorage.removeItem('token')
    localStorage.removeItem('userData1')
    this.router.navigate(['/'])
  }
}
