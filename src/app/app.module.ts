import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContentComponent } from './components/content/content.component';
import { Error404Component } from './components/error404/error404.component';
import { AuthComponent } from './components/auth/auth.component';
import { AddminPageComponent } from './components/addmin-page/addmin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { Component } from '@angular/core';
import { CreateOrderComponent } from './components/user-page/create-order/create-order.component';
import { OrderListComponent } from './components/user-page/order-list/order-list.component';
import { OrderDetailComponent } from './components/user-page/order-detail/order-detail.component';
import { UserRegisterComponent } from './components/addmin-page/user-register/user-register.component';
import { UserManageComponent } from './components/addmin-page/user-manage/user-manage.component';
import { UserInfoChangeComponent } from './components/addmin-page/user-info-change/user-info-change.component';
import { UserChangePasswordComponent } from './components/addmin-page/user-change-password/user-change-password.component';
import { ChangePasswordUserComponent } from './components/user-page/change-password-user/change-password-user.component';
import { SetPasswordComponent } from './components/addmin-page/set-password/set-password.component';
import { ModalModule } from './components/_modal';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    ContentComponent,
    Error404Component,
    AuthComponent,
    AddminPageComponent,
    UserPageComponent,
    CreateOrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    UserRegisterComponent,
    UserManageComponent,
    UserInfoChangeComponent,
    UserChangePasswordComponent,
    ChangePasswordUserComponent,
    SetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
