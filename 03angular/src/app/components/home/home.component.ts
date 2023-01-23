import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //传递给子组件的值
  public title: string = "首页组件的标题";
  public msg: string = "消息";

  constructor() {

  }

  run() {
    alert("我是父组件的run方法")
  }


}
