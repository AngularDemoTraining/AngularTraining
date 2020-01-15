import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CssSelector } from '@angular/compiler';
import { LoginService } from './login.service';
import { AuthService} from '../shared/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  constructor(private router: Router,
    private loginService: LoginService,
    public auth: AuthService) { }
  role = '';
  ngOnInit() {
  }
  

  onSubmit(form: NgForm) {
    console.log(this.email);
    console.log(this.password);
    this.loginService.login(this.email, this.password).subscribe(
      resp => {
        //snackBarRef.dismiss();
        
        this.auth.UserInfo = resp.body;
        console.log(this.auth.UserInfo.role);
        localStorage.setItem("userInfor",JSON.stringify(resp.body));
        localStorage.setItem("token",this.auth.UserInfo.token);
        if(this.auth.UserInfo.role === 'admin'){
          this.router.navigate(['admin']);
        }
        else if(this.auth.UserInfo.role === 'user'){
          this.router.navigate(['user']);
        }
        else{
          alert('Thong tin dang nhap khong chinh xac');
        }
      }
    )
  }
}
