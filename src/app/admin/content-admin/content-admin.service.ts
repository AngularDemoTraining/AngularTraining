import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class ContentAdminService {
    constructor(private http: HttpClient) { }

    register(data) {

        console.log(data);
        
        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token")});
        return this.http.post<any>("https://training.dochoietop.tk/api.user/user", JSON.stringify(data), { headers: headers, observe: 'response' });
    }

    layDanhSach() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token")});
        return this.http.get<any>("https://training.dochoietop.tk/api.user/user",  { headers: headers, observe: 'response' });
    }

    updatePassword(password){
        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token")});
        return this.http.put<any>("https://training.dochoietop.tk/api.user/user", JSON.stringify(password),{ headers: headers, observe: 'response' });
    }

}