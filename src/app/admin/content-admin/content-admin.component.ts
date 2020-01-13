import { Component, OnInit } from '@angular/core';
import {Account} from '../../account.model';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css']
})
export class ContentAdminComponent implements OnInit {

  headers = ["fullname", "email", "password", "phone", "role"];
  accounts : Account[] = [
    {"fullname": "John","email":"mrherik@gmail.com","password":"123456","phone": "021912941","role":"admin"},
    {"fullname": "Hai","email":"dsfkjdsfjk@gmail.com","password":"123456","phone": "021423341","role":"user"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
''