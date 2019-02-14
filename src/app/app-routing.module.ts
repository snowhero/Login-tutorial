import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'register', component: RegisterComponent },
 /* !!! */ { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
