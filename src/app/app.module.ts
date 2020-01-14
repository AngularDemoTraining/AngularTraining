import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { ModalModule } from './_modal';
import { ContentAdminComponent } from './admin/content-admin/content-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';

const appRoutes: Routes = [
  { path:'', component: LoginComponent },
  { path:'user', component: UserComponent },
  { path:'admin', component: AdminComponent },
  { path:'404', component: Error404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    Error404Component,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    HeaderAdminComponent,
    ContentAdminComponent,
    MenuAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
