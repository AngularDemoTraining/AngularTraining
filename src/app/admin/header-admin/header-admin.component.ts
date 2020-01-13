import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { ModalService } from '../../_modal';
import { from } from 'rxjs';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  providers: [AccountService]
})
export class HeaderAdminComponent implements OnInit {

  fullname: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  role: string = '';
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

  onAddAccount() {
    this.accountService.register(this.fullname, this.email, this.password, this.phone, this.role).subscribe(
      resp => {
        localStorage.setItem("userInfor", JSON.stringify(resp.body));
      }
    )
  }
}
