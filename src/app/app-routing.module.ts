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
const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'user', component: UserPageComponent, canActivate: [UserAuthGuard], children: [
      { path: 'orderList', component: OrderListComponent },
      { path: 'orderDetail/:id', component: OrderDetailComponent },
      { path: 'createOrder', component: CreateOrderComponent },
    ]
  },
  { path: 'admin', component: AddminPageComponent, canActivate: [AdminAuthGuard] },
  { path: 'PageNotFound', component: Error404Component },

  { path: '**', redirectTo: '/PageNotFound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
