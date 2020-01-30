import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  userList = [];
  constructor(private adminService: AdminService,private router: Router) { }
  ngOnInit() {
   this.getAlluser()
  }
  private getAlluser() {
    this.adminService.getAllUser().subscribe(resp => {
      this.userList = resp.body.data;
    })
  }
  onDelete(id: number) {
    this.adminService.deleteUser(id).subscribe(resp => {
       this.getAlluser();
       console.log(resp)
    })
  }
  onUpdateInfo(user){
    this.adminService.userInfo.next(user)
    this.router.navigate(['/admin/changeUser'])
  }
  onSetPassword(user){
    this.adminService.setPasswordUser.next(user)
    this.router.navigate(['/admin/setPassword'])
  }
}
