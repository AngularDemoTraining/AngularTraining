import { Component, OnInit } from '@angular/core';
import { Account } from '../../account.model';
import { ContentAdminService } from './content-admin.service';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css'],
  providers: [ContentAdminService]
})
export class ContentAdminComponent implements OnInit {

  headers = ["fullname", "email", "password", "phone", "role"];

  detailItem: any = { fullname: '', email: '', password: '', phone: '', role: '' };
  listItem: any = [];
  password: '';
  constructor(private service: ContentAdminService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.layDsUser();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onAddAccount() {
    console.log(this.detailItem);
    this.service.register(this.detailItem).subscribe(
      resp => {
        console.log(resp.body);
        this.closeModal('custom-modal-1');
        this.layDsUser();
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

  updatePassword(){
    this.service.updatePassword(this.password).subscribe(
      resp => {
        
      }
    )
  }

}
