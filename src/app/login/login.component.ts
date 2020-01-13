import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CssSelector } from '@angular/compiler';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: NgForm;

  email: string = '';
  password: string = '';
  constructor(private router: Router,
    private loginService: LoginService) { }
  role = '';;
  auth: any;
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(this.email);
    console.log(this.password);
    this.loginService.login(this.email, this.password).subscribe(
      resp => {
        //snackBarRef.dismiss();
        
        this.auth = resp.body;
        console.log(this.auth.role);
        localStorage.setItem("userInfor",JSON.stringify(resp.body));
        if(this.auth.role === 'admin'){
          this.router.navigate(['admin']);
        }
        else if(this.auth.role === 'user'){
          this.router.navigate(['user']);
        }
        else{
          alert('Thong tin dang nhap khong chinh xac');
        }
      }
    )
  }
}
