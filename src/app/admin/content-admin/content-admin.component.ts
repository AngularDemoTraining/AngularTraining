import { Component, OnInit } from '@angular/core';
import { Account } from '../../account.model';
import { ContentAdminService } from './content-admin.service';
import { ModalService } from '../../_modal';
import { AuthService } from '../../shared/auth-service';
import { from, ReplaySubject } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css'],
  providers: [ContentAdminService]
})
export class ContentAdminComponent implements OnInit {

  headers = ["fullname", "email", "password", "phone", "role"];

  detailItem: any = { id: 0, fullname: '', email: '', password: '', phone: '', role: '' };
  listItem: any = [];
  passwordItem: any = { id: this.auth.UserInfo.id, currentPassword: '', password: '', rePassword: '' };
  deleteItem: any = { id: 0, fullname: '', email: '', password: '', phone: '', role: '' };;
  constructor(private service: ContentAdminService,
    private modalService: ModalService,
    public auth: AuthService) { }

  ngOnInit() {
    this.layDsUser();
    console.log(this.auth.UserInfo);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  onCreate() {
    this.openModal('custom-modal-1');
    this.detailItem = { id: 0, fullname: '', email: '', password: '', phone: '', role: '' };
  }
  onSave() {
    if (this.detailItem.id == 0) {
      this.onAddAccount();
    } else {
      this.onUpdateAccount();
    }
  }
  onUpdateAccount() {
    console.log(this.detailItem);
    this.service.update(this.detailItem).subscribe(
      resp => {
        console.log(resp.body);
        this.closeModal('custom-modal-1');
        this.layDsUser();
      }
    )
  }
  onAddAccount() {
    console.log(this.detailItem);
    this.service.register(this.detailItem).subscribe(
      resp => {
        console.log(resp.body);
        if (resp.body.error == null || resp.body.error == undefined) {
          alert('Them thanh cong');
          this.closeModal('custom-modal-1');
          this.layDsUser();
        }else{
          alert("Them khong thanh cong");
        }
      }
    )
  }

  layDsUser() {
    this.service.layDanhSach().subscribe(
      resp => {
        this.listItem = resp.body.data;
        console.log(this.listItem);
      }
    )
  }

  onUpdatePassword() {
    console.log(this.passwordItem);
    this.service.updatePassword(this.passwordItem).subscribe(
      resp => {
        console.log(resp.body);
        if (resp.body.error == null || resp.body.error == undefined) {
          alert('Doi pass thanh cong');
          this.closeModal('custom-modal-1');
        } else {
          alert('Doi pass ko thanh cong');
        }

      }
    )
  }

  AnswerDelete(item) {
    this.deleteItem = $.extend({}, item);
    this.openModal('custom-modal-3');
  }

  onDelete() {
    this.service.onDelete(this.deleteItem).subscribe(
      resp => {
        console.log(resp.body);
        this.closeModal('custom-modal-3');
        this.layDsUser();
      }
    )
  }
  onUpdate(item) {
    this.detailItem = $.extend({}, item);
    this.openModal('custom-modal-1');
  }

}
