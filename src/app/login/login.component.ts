import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  users = [{username: 'user' , password:'1', type: 'user'}];
  admins = [{username: 'admin' , password:'1', type: 'admin'}];
  // roles =[{id: 1,name:'admin'},{id: 2,name:'user'}];
  constructor(private router: Router) { }
  role = '';
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(this.role)
 
    if(this.role === 'user'){
      this.users.forEach((user) => {
        if(user.username === this.loginForm.value.userName && user.password === this.loginForm.value.password){
          this.router.navigate(['user'])
        }else{
          this.router.navigate(['404'])
        }
      })
    }else{
      this.admins.forEach((admin) => {
        if(admin.username === this.loginForm.value.userName && admin.password === this.loginForm.value.password){
          this.router.navigate(['admin'])
        }else{
          this.router.navigate(['404'])
        }
      })
    }
    // this.router.navigate([rountingLink]);
  }
}
