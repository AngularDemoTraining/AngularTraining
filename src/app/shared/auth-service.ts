import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    public IsLoggedIn:boolean = false;
    public UserInfo: any = {};
    constructor(private http: HttpClient, private router: Router) { }
   
    getToken(){
        return localStorage.getItem("token");
    }
    
    get userInfo(){
        let userInfo = JSON.parse(localStorage.getItem("userInfor"));
        return userInfo;
    }
}