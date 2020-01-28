import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderDetail :{product_name:'', price:0,phone:'', fullname:'', email:'',description:'', image_urls:'',created_at:''} = {product_name:'', price:0,phone:'', fullname:'', email:'',description:'', image_urls:'',created_at:''};
  constructor(private route: ActivatedRoute,private userService :UserService) { }
  ngOnInit() {
    this.userService.getOrder(this.route.snapshot.params['id']).subscribe(resp => {
      this.orderDetail = resp.body.data
      console.log(resp.body.data)
    })
  }

}
