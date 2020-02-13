import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderData :any= {product_name:'', price:0, description:'',image_urls:[]}
  image_url: '';
  onCreateOrder() {
    this.orderData.image_urls.push(this.image_url)
    this.userService.createOrder(this.orderData).subscribe(
      resp => {
        console.log(resp.body);
        if (resp.body.error == null || resp.body.error == undefined) {
          this.userService.validOrderList.push(resp.body.data);
        }else{
          alert("Them khong thanh cong");
        }
      }
    )
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
