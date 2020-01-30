import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../auth/auth-service.service';
import { Router } from '@angular/router';
import { ModalService } from '../_modal';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-addmin-page',
  templateUrl: './addmin-page.component.html',
  styleUrls: ['./addmin-page.component.css']
})
export class AddminPageComponent implements OnInit {
  constructor(private authService: AuthServiceService, private router: Router, private modalService: ModalService, private adminService: AdminService) { }
  fullName: string = '';
  userData = { email: '', fullname: '', phone: '', role: '', password: '' }
  errorMesaage: string = null;
  modalId: string = '';
  ngOnInit() {
    this.fullName = JSON.parse(localStorage.getItem('userData1')).fullName;
  }
  onLogOut() {
    this.authService.user.next(null);
    localStorage.removeItem('token')
    localStorage.removeItem('userData1')
    this.router.navigate(['/'])
  }
  openModal(id: string) {
    this.modalService.open(id);
    this.modalId = id;
  }
  closeModal(id: string) {
    this.modalService.close(id)
  }
  onRegister() {
    this.adminService.createUser(this.userData).subscribe((resp) => {
      if (resp.body.error) {
        this.errorMesaage = resp.body.error.message;
      } else {
        var userList
        this.modalService.close(this.modalId)
        this.router.navigate(['/admin/manageUser'])
        this.adminService.userList.subscribe(resp => {
          this.adminService.userList.subscribe(resp=> {
            userList = resp
          })
        })
        this.adminService.userList.next(userList)
        
      }
    })
  }
}
