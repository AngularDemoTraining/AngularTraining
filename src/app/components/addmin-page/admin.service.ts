import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userInfo = new BehaviorSubject<any>(null)
  setPasswordUser = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getAllUser() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.get<any>("https://training.dochoietop.tk/api.user/user", { headers: headers, observe: 'response' })
  }
  deleteUser(id: number) {
    let headers = new HttpHeaders({ 'Authorization': localStorage.getItem("token") });
    return this.http.delete<any>("https://training.dochoietop.tk/api.user/user?id=" + id, { headers: headers, observe: 'response' })
  }
  createUser(user) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.post<any>("https://training.dochoietop.tk/api.user/user", JSON.stringify(user), { headers: headers, observe: 'response' })
  }
  updateInfoUser(newInfo) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.put<any>("https://training.dochoietop.tk/api.user/user", JSON.stringify(newInfo), { headers: headers, observe: 'response' })
  }
  setPassword(newPassword, userId) {
    console.log(newPassword) 
    console.log(userId)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.put<any>("https://training.dochoietop.tk/api.user/user/"+ JSON.stringify(userId)+ "/set-password", JSON.stringify(newPassword), { headers: headers, observe: 'response' })
  }
}