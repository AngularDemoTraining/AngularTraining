import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }
  login(userData) {

    let data = {
      email: userData.email,
      password: userData.password,
    }
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>('https://training.dochoietop.tk/api.user/user/login', JSON.stringify(data), { headers: headers, observe: 'response' });
  }
  getIdUser(): number{
   return this.user.value.id
  }
  autoLogin() {
    const userData: {
      token: string,
      id: number,
      email: string,
      name: string,
      role: string,
    } = JSON.parse(localStorage.getItem('userData1'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.token, userData.id, userData.email, userData.name, userData.role);
    this.user.next(loadedUser)
  }
}
