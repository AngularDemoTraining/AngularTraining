import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userData = { email: '', fullname: '', phone: '', role: '', password: '' }
  errorMesaage: string = null;
  constructor(private adminService: AdminService, private router: Router) { }
  @ViewChild('form', { static: true }) form;
  ngOnInit() {
  }
  onRegister() {
    this.adminService.createUser(this.userData).subscribe((resp) => {
      console.log(resp)
      if (resp.body.error) {
        this.form.reset(),
          this.errorMesaage = resp.body.error.message;
      } else {
        this.form.reset()
        this.router.navigate(['/admin/manageUser'])
      }
    })
  }
}
