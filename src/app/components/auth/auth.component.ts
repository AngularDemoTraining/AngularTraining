import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { User } from './user.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('form', { static: true }) form;
  errorMessage: string = '';
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
 
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe(resp => {
      console.log(resp)
      if (resp.body.role === 'user') {
        this.router.navigate(['/user'])
        this.handleAuthentication(resp.body.token,resp.body.id,resp.body.email,resp.body.fullname,resp.body.role)
      }
      else if (resp.body.role === 'admin') {
        this.router.navigate(['/admin'])
        this.handleAuthentication(resp.body.token,resp.body.id,resp.body.email,resp.body.fullname,resp.body.role)
      }
      else {
        alert(resp.body.error.message)
      }
    })
    this.form.reset();
  }
  handleAuthentication(token: string,id: number, email: string,name: string, role: string){
    let user =new User(token, id, email,name,role);
    this.authService.user.next(user);
    localStorage.setItem('userData1', JSON.stringify(user));
    localStorage.setItem('token', user.token);
  }
}
