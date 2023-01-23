import { Component, OnInit } from '@angular/core';
//使用service
import { StorageService } from '../services/storage.service'

//使用service(不推荐)
// var storage = new StorageService();

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string = '';
  public historyList: any[] = [];

  //使用service(推荐)
  constructor(public storage: StorageService) {

    //使用service
    // console.log(this.storage.get())

  }

  ngOnInit(): void {
    var historyList:any = this.storage.get('searchList');
    if (historyList) {
      this.historyList = historyList;
    }
    // throw new Error('Method not implemented.');
  }

  doSearch(): void {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);
    }
    this.storage.set('searchList', this.historyList);
    // console.log(this.historyList.length);
    // console.log(this.keyword);
    this.keyword = '';
  }

  deleteHistory(key: any) {
    this.historyList.splice(key, 1);
    this.storage.set('todolist', this.historyList);
  }
}
