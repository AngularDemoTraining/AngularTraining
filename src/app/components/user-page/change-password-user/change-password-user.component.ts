import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from './../../auth/auth-service.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {
  @ViewChild('form', { static: true }) form;
  constructor(private router: Router,private authService: AuthServiceService,private userService: UserService) { }
  passWordItem: { currentPassword: string, newPassword: string, rePassword: string } = { currentPassword: '', newPassword: '', rePassword: '' }
  ngOnInit() {
  }
  onChangePassword() {
    if (this.passWordItem.newPassword !== this.passWordItem.rePassword) {
      alert('Mật khẩu không trùng nhau');
      this.form.reset();
    }else {
      let passWordItem = {
        id: this.authService.user.value.id,
        rePassword:this.passWordItem.rePassword,
        password: this.passWordItem.newPassword,
        currentPassword: this.passWordItem.currentPassword
      }
      console.log(passWordItem)
      this.userService.changePassword(passWordItem).subscribe(resp => {
        this.router.navigate(['/']);
      })
    }
    
  }
}
