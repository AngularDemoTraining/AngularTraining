import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info-change',
  templateUrl: './user-info-change.component.html',
  styleUrls: ['./user-info-change.component.css']
})
export class UserInfoChangeComponent implements OnInit {
  newData = {};
  constructor(private adminService: AdminService,private router:Router) { }
  errorMesaage : string =null
  ngOnInit() {
    this.displayOldData();
  }
  private displayOldData() {
    this.adminService.userInfo.subscribe(resp => {
      this.newData= {
        id : resp.id,
        email : resp.email,
        fullname : resp.fullname,
        phone : resp.phone,
      }
    })
  }
  onUpdateInfo() {
    console.log(this.newData)
    this.adminService.updateInfoUser(this.newData).subscribe(resp => {
      console.log(resp)
      if (resp.body.error) {
          this.errorMesaage = resp.body.error.message;
      } else {
        this.router.navigate(['/admin/manageUser'])
      }
    })
  }
}
