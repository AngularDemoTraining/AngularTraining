import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { Error404Component } from './components/error404/error404.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AddminPageComponent } from './components/addmin-page/addmin-page.component';
import { AuthGuard } from './components/auth/auth-guard';
import { AdminAuthGuard } from './components/auth/admin-auth-guard';
import { UserAuthGuard } from './components/auth/user-auth-guard';
import { OrderListComponent } from './components/user-page/order-list/order-list.component';
import { OrderDetailComponent } from './components/user-page/order-detail/order-detail.component';
import { CreateOrderComponent } from './components/user-page/create-order/create-order.component';
import { UserRegisterComponent } from './components/addmin-page/user-register/user-register.component';
import { UserManageComponent } from './components/addmin-page/user-manage/user-manage.component';
import { UserInfoChangeComponent } from './components/addmin-page/user-info-change/user-info-change.component';
import { UserChangePasswordComponent } from './components/addmin-page/user-change-password/user-change-password.component';
import { ChangePasswordUserComponent } from './components/user-page/change-password-user/change-password-user.component';
import { SetPasswordComponent } from './components/addmin-page/set-password/set-password.component';
import { SetPasswordGuard } from './components/auth/set-password-guard.component';
const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'user', component: UserPageComponent, canActivate: [UserAuthGuard], children: [
      { path: 'orderList', component: OrderListComponent },
      { path: 'orderDetail/:id', component: OrderDetailComponent },
      { path: 'createOrder', component: CreateOrderComponent },
      { path: 'changePasswordUser', component: ChangePasswordUserComponent }
    ]
  },
  {
    path: 'admin', component: AddminPageComponent, canActivate: [AdminAuthGuard], children: [
      { path: 'createUser', component: UserRegisterComponent },
      { path: 'changeUser', component: UserInfoChangeComponent },
      { path: 'manageUser', component: UserManageComponent },
      {path: 'changePassword', component: ChangePasswordUserComponent},
      {path: 'setPassword', component: SetPasswordComponent,  canActivate: [SetPasswordGuard]}
    ]
  },
  { path: 'PageNotFound', component: Error404Component },

  { path: '**', redirectTo: '/PageNotFound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
