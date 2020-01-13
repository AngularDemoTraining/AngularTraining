import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(email, password) {

        let data = {
            email: email,
            password: password
        };
        console.log(data);
        

        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post<any>("https://training.dochoietop.tk/api.user/user/login", JSON.stringify(data), { headers: headers, observe: 'response' });
    }

    

}