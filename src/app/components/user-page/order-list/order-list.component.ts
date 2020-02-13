import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../auth/auth-service.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  role = '';
  constructor(private authService: AuthServiceService, private userService: UserService) { }

  ngOnInit() {
    this.authService.user.subscribe(resp => {
      if (resp.role === 'user') {
      this.getValidOrderList();
      this.role = 'user'
      } else {
        this.userService.getOrderList().subscribe(orderList => {
          console.log(orderList.body.data)
          this.userService.validOrderList = orderList.body.data;
        })
        this.role = 'admin'
      }
    })
  }
  private getValidOrderList() {
    this.userService.getOrderList().subscribe(orderList => {
      const list = orderList.body.data;
      list.forEach(order => {
        const authId = this.authService.getIdUser();
        if (order.User.id === authId) {
          this.userService.validOrderList.push(order)
        }
      })
    })
  }

}
