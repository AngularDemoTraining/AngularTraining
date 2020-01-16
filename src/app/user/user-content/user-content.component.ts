import { Subscription } from 'rxjs';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {
  subscription: Subscription
  constructor(private UserServiceService: UserServiceService) { }
  orderList: any = [];
  ngOnInit() {
    this.getOrders()
  }
  getOrders() {
    console.log('Lay cac don hang')
    this.UserServiceService.getOrders().subscribe((resp) => {
      console.log(resp.body.data);
     this.orderList= resp.body.data
    });
  }
}
