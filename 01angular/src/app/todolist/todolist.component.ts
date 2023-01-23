import { Component, OnInit } from '@angular/core';
//使用service
import { StorageService } from '../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {

  public keyword: string = '';
  public todolist: any[] = [];

  //使用service
  constructor(public storage: StorageService) {

  }
  ngOnInit(): void {
    var todolist = this.storage.get('todolist');
    if (todolist) {
      this.todolist = todolist;
    }
    // throw new Error('Method not implemented.');
  }

  doadd(e: any) {

    if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
      if (e.keyCode == 13) {
        this.todolist.push({
          titile: this.keyword,
          status: 0
        }
        )
        this.keyword = '';
      }
    }
    this.storage.set('todolist', this.todolist);
  }
  deleteData(index: any) {

    this.todolist.splice(index, 1);
    this.storage.set('todolist', this.todolist);

  }

  todolistHasKeyword(todolist: any, keyword: any) {
    //异步，会存在问题。
    // todolist.forEach(value => {
    //   if(value.titile == keyword){
    //     return true;
    //   }
    // });
    for (var i = 0; i < todolist.length; i++) {
      if (todolist[i].titile == keyword) {
        return true;
      }
    }
    return false;
  }

  changeBox() {
    this.storage.set('todolist', this.todolist);
  }

}
