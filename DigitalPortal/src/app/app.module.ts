import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FirstNamePipe } from './users/first-name.pipe';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    UsersComponent,
    AppComponent,
    FirstNamePipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
