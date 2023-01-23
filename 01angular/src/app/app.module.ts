import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//手动写入用于双向绑定用的组件
import { FormsModule } from '@angular/forms'

//手动导入service模块
import { StorageService } from './services/storage.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { TransctionComponent } from './transction/transction.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    TransctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //手动写入用于双向绑定用的组件
    FormsModule,


  ],
  providers: [StorageService],    //手动导入service模块
  bootstrap: [AppComponent]
})
export class AppModule { }
