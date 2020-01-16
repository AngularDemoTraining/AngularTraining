import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  getOrders() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
    return this.http.get<any>("https://training.dochoietop.tk/api.order/order?page=1&perpage=20", { headers: headers, observe: 'response' });
}
}
