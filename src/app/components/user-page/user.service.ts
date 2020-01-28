import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  validOrderList: any = [];
  constructor(private http: HttpClient) { }
  getOrder(id:number) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.get<any>("https://training.dochoietop.tk/api.order/order/" + id, { headers: headers, observe: 'response' });
  }
  getOrderList() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.get<any>("https://training.dochoietop.tk/api.order/order?page=1&perpage=20", { headers: headers, observe: 'response' });
  }
  createOrder(orderData: any) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token") });
        return this.http.post<any>("https://training.dochoietop.tk/api.order/order", orderData, { headers: headers, observe: 'response' });
  }
  changePassword(passwordItem){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8', 'Authorization': localStorage.getItem("token") });
    return this.http.put<any>("https://training.dochoietop.tk/api.user/user", passwordItem, { headers: headers, observe: 'response' });
  }
}
