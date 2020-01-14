import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    register(data) {

        // let data = {
        //     fullname : fullname,
        //     email: email,
        //     password: password,
        //     phone: phone,
        //     role: role
        // };
        console.log(data);
        
        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token")});
        return this.http.post<any>("https://training.dochoietop.tk/api.user/user", JSON.stringify(data), { headers: headers, observe: 'response' });
    }

    

}