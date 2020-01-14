import { Component, OnInit } from '@angular/core';
import { AccountService } from './header-admin.service';
import { ModalService } from '../../_modal';
import { from } from 'rxjs';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  providers: [AccountService]
})
export class HeaderAdminComponent implements OnInit {

  detailItem: any = { fullname: '', email: '', password: '', phone: '', role: '' };
  listItem: any = [];
  constructor(private accountService: AccountService,
    private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  layDsUser() {

  }

 
}
