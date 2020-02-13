import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  password :{password: string, rePassword: string} ={password: '', rePassword: ''}
  constructor(private adminService: AdminService, private router: Router) { }
  setPasswordUser: number;
  ngOnInit() {
    this.adminService.setPasswordUser.subscribe(resp => {
      console.log(resp)
      this.setPasswordUser = resp.id
    })
  }
  onSetPassword() {
    this.adminService.setPassword(this.password, this.setPasswordUser).subscribe(resp => {
      this.router.navigate(['/admin/manageUser'])
    })
  }
}
